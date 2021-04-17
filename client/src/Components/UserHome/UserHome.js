import React from 'react'
import './UserHome.css'
import { useStateValue } from '../../StateProvider'
import {Link} from 'react-router-dom';

function UserHome({dbUserId}) {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="userHome">
            <img src={user?.photoURL}/>
            <h1> Hello {user.displayName}!</h1>
            {dbUserId && <Link className="userHome__button"to={`user/${dbUserId}/room`}> 
                <button>Unlock Your Chats</button>
            </Link>}
            
        </div>
    )
}

export default UserHome
