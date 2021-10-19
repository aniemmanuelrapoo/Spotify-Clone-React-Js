import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const SidebarOptionContainer = styled.div`
    ${tw`text-gray-400 h-9 cursor-pointer hover:text-white transition ease-in duration-200 flex items-center`}
`
const Head = styled.div`
    ${tw`font-bold text-base`}
`
const Para = styled.div`
    ${tw`mt-3 ml-3 text-base`}
`

const SidebarOption = ({ title, Icon }) => {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon className="mr-2" />}
            {Icon ? <Head>{title}</Head> : <Para>{title}</Para>} 
        </SidebarOptionContainer>
    )
}

export default SidebarOption
