# MERN-Kokoro-Chats


Kokoro Chat is real-time chat web app (What's App Clone) made using the MERN Stack(Mongo DB, Express, React and Node JS), Pusher and Firebase. A demo for this app can be found [here](https://kokoro-chats.herokuapp.com)

## Features

### User Registration and Authentication
This app handles user registration and authentication using Firebase and Mongo databases. Everytime the user opens Kokoro chats, it will be prompted to sign in with their google account (Firebase). If this is the first time using Kokoro, the web app will register the user's info(email and name) and create a new user in the database. Otherwise, the web app will display the user's previous chat rooms and messages. 


### Real-time Databases

The database (Mongo DB) for this web abb consists of two collections: Users and rooms. Rooms collection saves the name, id, and messages of each room. The User collection saves the name, email and rooms'Ids of each user. Any modification to the database that happens while the user is interacting with the app will be handle in real-time. Channel Streams were built using Pusher which allow real-time communication between app and database. 

### Chat Rooms

Kokoro chats is based in chat rooms. A user creates a new chat room which contains a unique ID and this user can share this ID with others users, which allows them access to that chat room. When a user creates a new room, this chat room is added to the rooms collection and to the user's rooms document in the database. When the user shares the room ID with other users, these users can also add this room to their user'rooms document. This allow the room chats to be a one-to-one or group converstaion. 

### Time Zone Handler 


Kokoro Chats display is capable to display in every message the time in which the user received the message, even if the user who sends the message was in a different timezone.



