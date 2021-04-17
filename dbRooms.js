import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp: String,
});


const roomSchema = mongoose.Schema({
    roomName:String,
    messages:[messageSchema]
});
//collection
export default mongoose.model('roomcontents', roomSchema);
