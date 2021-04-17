import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../Axios'
import { useParams } from "react-router-dom";
import Pusher from 'pusher-js'
import firebase from 'firebase'


function Chat({ rooms, userName, newMessage }) {
    const [input, setInput] = useState('');
    const { userId, roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);



    useEffect(() => {
        if (roomId) {
            for (let room of rooms) {
                if (room._id === roomId) {
                    setRoomName(room.roomName)
                    setMessages(room.messages)
                    break;
                }
            }
        }
    }, [rooms, roomId])

    useEffect(() => {
        if (roomId) {
            for (let room of rooms) {
                if (newMessage._id === roomId) {
                    setRoomName(room.roomName)
                    setMessages(room.messages)
                    break;
                }
            }
        }
    }, [newMessage])


    const sendMessage = async (e) => {
        e.preventDefault();
        let today = new Date()
        await axios.post(`/rooms/new/${roomId}`, {
            message: input,
            name: userName,
            timestamp: today
        });
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p> Last seen at{" "}{timezoneConverter(messages[messages.length - 1]?.timestamp)} </p>
                    <p> Room ID: {roomId}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton> <SearchIcon /> </IconButton>
                    <IconButton> <AttachFileIcon /> </IconButton>
                    <IconButton> <MoreVertIcon /> </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages && messages.map(message => (
                    <p key={message._id} className={`chat__message ${message.name === userName && 'chat__delivered'}`}>
                        <span className="chat__name">{message.name}</span>

                        {message.message}

                        <span className="chat__timestamp">
                            {timezoneConverter(message.timestamp)}
                        </span>
                    </p>
                ))}

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage}
                        type="submit">
                        Send
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat

function timezoneConverter(messageDate){
    let date = new Date(messageDate) 
    let stringDate = String(date)
    let utcOffset = date.getTimezoneOffset();
    if(!stringDate.includes('GMT-'))
        utcOffset = -utcOffset
    date.setMinutes(date.getMinutes() + utcOffset)
    let localDate = new Date();
    let stringLocalDate = String(localDate)
    let localOffset = localDate.getTimezoneOffset();
    if(stringLocalDate.includes('GMT-'))
        localOffset = -localOffset
    date.setMinutes(date.getMinutes() + localOffset)
    let hours = date.getHours()
    let stringHours
    if(hours>9)
        stringHours = String(hours)
    else
        stringHours = `0${hours}`
    let minutes = date.getMinutes()
    let stringMinutes
    if(minutes>9)
        stringMinutes = String(minutes)
    else
        stringMinutes = `0${minutes}`

    let month = date.getMonth() + 1
    let convertedDate = `${stringHours}:${stringMinutes} - ${month}/${date.getDate()}/${date.getFullYear()}`
    return convertedDate
}