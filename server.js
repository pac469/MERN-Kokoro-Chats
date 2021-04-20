//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Rooms from './dbRooms.js';
import Users from './dbUsers.js';
import Pusher from 'pusher';
import cors from 'cors';
import bodyParser from 'body-parser';

//
const pusher = new Pusher({
    appId: "1130291",
    key: "8cc15aed3d6658d11adc",
    secret: "0abc85173537f39be5c1",
    cluster: "us3",
    useTLS: true
  });



//app config
const app = express()


const port = process.env.PORT || 9000



//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//DB config
const connectionUrl = "mongodb+srv://admin:5ePpCRS5ojldMvhq@cluster0.hqyir.mongodb.net/kokorodb?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI||connectionUrl,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
//Pusher
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open',()=>{
    // Rooms ChangeStream 
    const roomCollection = db.collection('roomcontents')
    const roomChangeStream = roomCollection.watch();

    roomChangeStream.on('change', (change)=>{
        if(change.operationType === 'update'){
            const newMessage = Object.values(change.updateDescription.updatedFields)[0]
            const roomID = change.documentKey._id;
            pusher.trigger(
                'messages',
                'updated',
                {
                    _id: newMessage._id,
                    message: newMessage.message,
                    name: newMessage.name,
                    timestamp: newMessage.timestamp,
                    roomID: roomID
                }
            );
        }
    });

    const userCollection = db.collection('usercontents')
    const userChangeStream = userCollection.watch()

    userChangeStream.on('change', (change)=>{
        if(change.operationType === "update"){
            const userId = change.documentKey._id
            const roomId = Object.values(change.updateDescription.updatedFields)[0]
            pusher.trigger(
                'rooms',
                'updated',
                {
                    userId: userId,
                    roomId:roomId
                }
            );
        }
    });

});

//api routes 



app.get('/rooms/sync', (req,res) =>{
    Rooms.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

app.get('/users/sync', (req,res)=>{
    Users.findOne(
        {email:req.query.email},
        (err,user)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(user)
            }
        }
    )
})

app.get('/rooms/sync/:roomId', (req,res) => {
    Rooms.findById(req.params.roomId,
        (err, room) =>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(room)
            }
        }
    )
})

app.post('/users/new', (req,res) => {
    const dbUser = req.body;
    Users.create(dbUser, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(`new user created: \n ${data}`)
        }
    })
} )


app.post('/rooms/new', (req, res) => {
    const dbRoom = req.body;

    Rooms.create(dbRoom, (err,data) => {
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/rooms/new/:roomId', (req, res) => {
    const message = req.body;
    Rooms.findByIdAndUpdate({_id:req.params.roomId },
        {$push:{messages:message}},
        {new:true},
        (err, result) => {
            if(err){
                res.status(500).send(err)
            } else{
                res.status(201).send(`messages updated: \n ${result}`)
            }
        })
});

app.post('/users/update/:userId', (req, res) => {
    const room = req.body.roomId;
    Users.findByIdAndUpdate({_id:req.params.userId},
        {$push:{"rooms":room}},
        {new:true},
        (err, result) => {
            if(err){
                res.status(500).send(err)
            } else{
                res.status(201).send(`user updated: \n ${result}`)
            }
        })
})

app.post('/users/update/message/:userId', (req, res) => {
    const message = req.body;
    Users.findByIdAndUpdate(req.params.userId,
        {$push:{"rooms.messages":message}},
        {new:true},
        (err, result) => {
            if(err){
                res.status(500).send(err)
            } else{
                res.status(201).send(`user updated: \n ${result}`)
            }
        })
})

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(port, () => console.log(`Listening on localhost:${port}`))

//mongodb+srv://admin:5ePpCRS5ojldMvhq@cluster0.hqyir.mongodb.net/kokorodb?retryWrites=true&w=majority