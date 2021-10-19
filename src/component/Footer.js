import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIicon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Grid, Slider } from '@mui/material';
import PlayListPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import AlubumImg from '../assest/m_a_r_s_by_ler_ac_dd3jfyz-fullview-5ce55c36e256c__605.jpg'

const FooterContainer = styled.div`
    ${tw`fixed bottom-0 h-20 w-full p-6 flex justify-between shadow-lg`}
    background-color:#282828;
`
const FooterLeft = styled.div`
    ${tw`flex items-center text-white`}
    max-width:350px;
    flex: 0.3;
    img{
       ${tw`h-14 w-14 mr-5 object-contain`} 
    }
`
const FooterCenter = styled.div`
    ${tw`px-10 flex items-center text-white justify-between`}
    flex: 0.4;
    max-width:350px;
`
const FooterRight = styled.div`
    ${tw`flex justify-between items-center text-white`}
    flex: 0.3;
`
const SongNameContainer = styled.div`
    h4{
        ${tw`mb-1 text-xl font-bold`}
    }
    p{
        ${tw`text-lg`}
    }
`
const IconPack = styled.span`
    &:hover{
        transition: transform 0.2s ease-in-out ;
        transform: scale(1.2) !important;
    }
    
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src={AlubumImg} alt="" />
                <SongNameContainer>
                    <h4>Yeah</h4>
                    <p>Usher</p>
                </SongNameContainer>
            </FooterLeft>
                
            <FooterCenter>
                <IconPack><ShuffleIicon className="text-green-500" /></IconPack>
                <IconPack><SkipPreviousIcon className="" /></IconPack>
                <IconPack> <PlayCircleOutlineIcon fontSize="large" className="" /></IconPack>
                <IconPack><SkipNextIcon className="" /></IconPack>
                <IconPack><RepeatIcon className="text-green-500" /></IconPack> 
            </FooterCenter>

            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlayListPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer
