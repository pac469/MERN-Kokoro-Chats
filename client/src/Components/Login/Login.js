import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { auth, provider} from '../../Firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider'
import { Link } from 'react-router-dom';

function Login() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container"> 
                <div className="login__logo">
                    <h1>KOKORO CHATS</h1>
                    <LoyaltyIcon className="login__icon" />
                </div>
                <Link class="link" to='/'>
                    <Button class="login__button" onClick={signIn}>
                        Sign In With Google
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Login
