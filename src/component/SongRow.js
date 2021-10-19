import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const SongRowContainer = styled.div`
    ${tw`ml-5 p-4 flex items-center z-50 text-white hover:cursor-pointer hover:bg-black hover:opacity-80`}
    img{
        ${tw`h-10 w-10`}
    }
`
const SongRowInfo = styled.div`
    ${tw`ml-5`}
    h1{
        ${tw`text-base font-bold`}
    }
    p{
        ${tw`text-xs mt-1 text-gray-500`}
    }
`

const SongRow = ({track}) => {
    return (
        <SongRowContainer>
            <img src={track.album.images[0].url} alt="" />
            <SongRowInfo>
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name).join(", ")} -{" "}{track.album.name}</p>
            </SongRowInfo>
        </SongRowContainer>
    )
}

export default SongRow
