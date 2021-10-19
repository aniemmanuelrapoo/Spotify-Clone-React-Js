import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import logo from '../assest/spotify2019-830x350.jpg'
import SidebarOption from '../SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer'

const SidebarContainer = styled.div`
    ${tw`h-screen text-white px-3.5`}
    flex: 0.2;
    min-width: 230px;
    background-color: #040404;
    img{
        ${tw`h-20 p-3 m-auto`}
    }
    hr{
        ${tw`border border-gray-700 w-full mx-6 m-auto`}
    }
`
const PlayListTag = styled.strong`
    ${tw`ml-1 p-1 text-base`}
`

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue()
    return (
        <SidebarContainer>
            <img src={logo} alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <PlayListTag>PLAYLISTS</PlayListTag>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar
