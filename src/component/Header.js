import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../DataLayer';

const HeaderContainer = styled.div`
    ${tw`flex justify-between mb-8`}
`
const HeaderLeft = styled.div`
    ${tw`bg-white text-gray-500 rounded-3xl flex items-center p-2.5`}
    flex:0.6;
    min-width: 90px;
    input{
        ${tw`w-full border-none text-sm`}
    }
`
const HeaderRight = styled.div`
    ${tw`flex items-center ml-1`}
    h4{
        ${tw`ml-2.5 text-sm font-bold`}
    }
`


const Header = ({spotify}) => {
    const [{ user }] = useDataLayerValue()
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs, or Podcasts" />
            </HeaderLeft>
            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
