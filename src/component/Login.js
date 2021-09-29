import React from 'react';
import './Login.css'
import spotifyimg from '../assest/spotify2019-830x350.jpg'
import { loginUrl } from './spotify';

const Login = () => {
    return (
        <div className="login">
            <img src={spotifyimg} alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
