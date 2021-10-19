import React from 'react';
import spotifyimg from '../assest/spotify2019-830x350.jpg'
import { loginUrl } from './spotify';
import tw from 'twin.macro'
import styled from 'styled-components';

const Container = styled.div`
    ${tw`grid items-center h-screen bg-black`}
    img{
        ${tw`w-full`}
    }
    a{
        ${tw`p-5 rounded-full font-bold text-white w-52 m-auto`}
        background-color: #1db954;
    }
`

const Login = () => {
    return (
        <Container>
            <img src={spotifyimg} alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </Container>
    )
}

export default Login
