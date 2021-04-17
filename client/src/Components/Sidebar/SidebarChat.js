import React, {useState, useEffect} from 'react'
import './SidebarChat.css'
import {Avatar, IconButton} from '@material-ui/core';
import axios from '../../Axios'
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import Pusher from 'pusher-js'

function SidebarChat({addNewChat, findRoom, roomName, userID, id, finalMessage}) {
    const [lastMessage, setLastMessage] = useState('')
    const [seed, setSeed] = useState('');
    const { userId, roomId } = useParams();

    
    useEffect(()=>{
        if(finalMessage){
            setLastMessage(finalMessage.message)
        }
    },[finalMessage]);


    useEffect(()=>{
        setSeed(Math.floor(Math.random()*500));
    }, []);

   

    const createChat = async () =>{
        const name = prompt("Please enter name for chat");

        if(name){
            
            await axios.post('/rooms/new',{
                roomName: name,
                messages:[]
            }). then(response=>{
                const roomCreated = response.data
                const roomCreatedId = {
                    roomId:roomCreated._id
                }
                
                axios.post(`/users/update/${userId}`, roomCreatedId)
            })
            //post room in user rooms 
        }
    }

    const findChat = async () =>{
        const roomId = prompt("Please enter the Room ID: ");
        if(roomId){
            //get room from rooms collection
            await axios.get(`/rooms/sync/${roomId}`)
            .then(response=>{
                const newRoom = response.data;
                let newRoomId = {
                    roomId:newRoom._id
                }
                axios.post(`/users/update/${userId}`, newRoomId)
            })
        }
    }

    
    
    

    return addNewChat ?
    (
        <div onClick={createChat} className="sidebarChat">
            <h2> Create room</h2>
        </div>
    ): findRoom ?(
         <div onClick={findChat} className="sidebarChat">
            <h2> Find room</h2>
        </div> 
    ):(
        <Link className="link" to={`/user/${userID}/room/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{roomName}</h2>
                        <p>{lastMessage}</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat
