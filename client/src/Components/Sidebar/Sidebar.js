import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat.js'
import axios from '../../Axios'
import {useStateValue} from '../../StateProvider'
import { useParams } from "react-router-dom";

function Sidebar({currentUser, pusher , newMessage}) {

    const [{user},dispatch] = useStateValue()
    const [userRooms,setUserRooms] = useState([])
    const [userRoomsIds, setUserRoomsIds] = useState([])
    const { userId, roomId } = useParams();
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        if(currentUser){
            if(currentUser.rooms){
                if(currentUser.rooms.length > 0){
                    for (let roomId of currentUser.rooms){
                        if(userRoomsIds.includes(roomId)) continue
                        setUserRoomsIds(oldUserRoomsIds=>[...oldUserRoomsIds,roomId])
                        axios.get(`/rooms/sync/${roomId}`)
                            .then(response =>{
                                setUserRooms(oldUserRooms => [...oldUserRooms, response.data])
                            })
                    }
                }else if(currentUser.rooms.length == 0 && index == 0){
                    axios.post('/rooms/new',{
                        roomName: 'Paulin Alcoser',
                        messages:[]
                    }). then(response=>{
                        const roomCreated = response.data
                        const roomCreatedId = {
                            roomId:roomCreated._id
                        }
                        axios.post(`/users/update/${userId}`, roomCreatedId);
                        axios.post('/users/update/5fe4268653855170a466d7c1', roomCreatedId);
                    })
                    setIndex(1)
                }
            }
        }
    },[ userRooms, userRoomsIds,currentUser])

    useEffect(() => {
        let roomIndex = userRooms.findIndex(room => room._id === newMessage.roomID);
        let newUserRooms = [...userRooms]
        if(newUserRooms[roomIndex])
        newUserRooms[roomIndex] = {...newUserRooms[roomIndex], messages:[...userRooms[roomIndex].messages, newMessage]}
        setUserRooms(newUserRooms)
       
    },[newMessage])

   

    useEffect(() => {
        const channel = pusher.subscribe('rooms');
        channel.bind('updated', (newRoom)=> {
            if(!userRoomsIds.includes(newRoom.roomId)) setUserRoomsIds(oldUserRoomsIds=>[...oldUserRoomsIds,newRoom.roomId])
        });
        return () =>{
            channel.unbind_all()
            channel.unsubscribe();
        } 
    },[userRoomsIds])
    
    
    return (
        <div className="sidebar">
           
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton> <ChatIcon className="headerRight__icon"/> </IconButton>
                    <IconButton><DonutLargeIcon className="headerRight__icon"/> </IconButton>
                    <IconButton><MoreVertIcon className="headerRight__icon"/></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat findRoom/>
                {userRooms.length && userRooms.map((room)=>(
                    <SidebarChat key={room._id} userID={currentUser._id} id={room._id} roomName={room.roomName} finalMessage={room.messages[room.messages.length -1]}/>
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar


