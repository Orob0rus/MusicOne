import React from 'react';
import './Login.css';
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login">
            <img src='https://i.pinimg.com/236x/d5/62/d4/d562d4205927c8d1ca5eed0adcaaa25d.jpg' alt='MusicOne Logo'/>
            <a href={loginUrl}> Login with Spotify</a>
        </div>
    )
}

export default Login