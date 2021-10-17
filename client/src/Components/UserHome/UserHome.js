import React from 'react'
import './UserHome.css'
import { useStateValue } from '../../StateProvider'
import { Link } from 'react-router-dom';

function UserHome({ dbUser }) {
    const [{ user }, dispatch] = useStateValue();
    console.log('dbUser: ', dbUser)

    return (
        <div className="userHome">
            <img src={user?.photoURL} />
            <h1> Hello {user.displayName}!</h1>
            {dbUser && <Link className="userHome__button" to={`user/${dbUser._id}/room`}>
                <button>Unlock Your Chats</button>
            </Link>}

        </div>
    )
}

export default UserHome
