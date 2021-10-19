import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavouriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './styles.css'
import SongRow from './SongRow'

const BodyContainer = styled.div`
    ${tw`h-screen text-white p-8`}
    overflow-y: overlay;
    flex: 0.8;
    background: linear-gradient(rgb(91, 87, 115), rgb(0, 0, 0, 1));
    &::-webkit-scrollbar {
        display:none;
    }
`
const BodyInfo = styled.div`
    ${tw`flex items-end p-2`}
    img{
        ${tw`mx-6 shadow-2xl`}
        height:20vw;
    }
`
const BodyInfoText = styled.div`
    ${tw`flex-1`}
    h2{
        ${tw`text-5xl font-bold mb-2.5`}
    }
    p{
        ${tw`text-sm`}
    }
`
const BodySong = styled.div`
    ${tw`mt-6 -mx-7`}
`
const BodySongIcons = styled.div`
    ${tw`flex items-center`}
    span{
        ${tw`ml-6`}
    }
`

const Body = ({spotify}) => {
    const [{ discover_weekly }] = useDataLayerValue()
    return (
        <BodyContainer>
            <Header spotify={spotify} />
            <BodyInfo>
                <img src={discover_weekly?.images[0].url} alt="" />
                <BodyInfoText>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </BodyInfoText>
            </BodyInfo>
            <BodySong>
                <BodySongIcons>
                    <span><PlayCircleFilledIcon className="playIcon"  /></span>
                    <span><FavouriteIcon fontSize="large" /></span>
                    <span><MoreHorizIcon /></span>
                </BodySongIcons>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </BodySong>
        </BodyContainer>
    )
}

export default Body
