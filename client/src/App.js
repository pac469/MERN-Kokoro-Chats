
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Chat from './Components/Chat/Chat'
import Login from './Components/Login/Login'
import UserHome from './Components/UserHome/UserHome'
import React,{ useEffect, useState} from 'react';
import Pusher from 'pusher-js'
import axios from './Axios.js'; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider'

const pusher = new Pusher('8cc15aed3d6658d11adc', { 
  cluster: 'us3'
});


function App() {
  
  const [rooms, setRooms] = useState([]);
  const [dbUser, setDbUser] = useState({})
  const [{user}, dispatch] = useStateValue();
  const [newMessage, setNewMessage] = useState({})
  
  

  useEffect(()=>{
      axios.get('/rooms/sync')
      .then(response => {
        setRooms(response.data); 
      })
  },[rooms])



  useEffect(() => {
    if(user){
      axios.get('/users/sync', {params: {email:user.email}})
      .then(response => {
         if(response.data !== ""){
           setDbUser(response.data)
         }else{
           const newUser = {
             userName:user.displayName,
             email:user.email,
             rooms:[]
           }
           axios.post('users/new', newUser).then(response =>{
            setDbUser(response.data)
           })
         }
      })    
    }
  }, [user, dbUser]) 

  useEffect(() => {
    
    if(rooms){
      const channel = pusher.subscribe('messages');
      channel.bind('updated', (pushMessage)=> {
          if(pushMessage._id !== newMessage._id){
            setNewMessage(pushMessage)
            let roomIndex = rooms.findIndex(room => room._id === pushMessage.roomID);
            let newRooms = [...rooms]
            if(rooms[roomIndex]){
              newRooms[roomIndex] = {...rooms[roomIndex], messages:[...rooms[roomIndex].messages, pushMessage]}
              setRooms(newRooms)
            }
          }    
      });
      return () =>{
          channel.unbind_all()
          channel.unsubscribe();
      }
    }  
  },[newMessage, rooms])

  

  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login/>
      ):(
        <div className="app__body">
        {/* <Router> */}
          <Switch>
            <Route path="/user/:userId/room/:roomId?">
                {dbUser && <Sidebar currentUser={dbUser} pusher={pusher} newMessage={newMessage}/>}
                <Chat rooms={rooms} userName={user.displayName} newMessage={newMessage}/>
            </Route>
            <Route path="/">
                {dbUser && <UserHome dbUserId={dbUser._id}/>}
            </Route>
          </Switch>
        {/* </Router> */}
      </div>
      )}
      </Router>
    </div>
  );
}

export default App;
