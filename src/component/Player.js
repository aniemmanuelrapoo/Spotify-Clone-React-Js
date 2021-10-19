import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import tw from 'twin.macro'
import Body from './Body'
import Footer from './Footer'

const PlayerContainer = styled.div`
    ${tw``}
`
const PlayerBody = styled.div`
    ${tw`flex`}
`

const Player = ({ spotify }) => {
    return (
        <PlayerContainer>
            <PlayerBody>
                <Sidebar />
                <Body spotify={spotify} />
            </PlayerBody>
            <Footer />
        </PlayerContainer>
    )
}

export default Player
