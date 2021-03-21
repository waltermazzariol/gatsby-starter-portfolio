import React from "react"
import styled from "styled-components"

const Subtitle = styled.div`
    font-size: 0.9rem;
    color: ${props => props.theme.SubtitleColor};
    a {
        color: ${props => props.theme.SubtitleColor};
    }
`
function GridSubtitle({ children }) {
    return (
            <Subtitle >{children}</Subtitle>
    )
}

export default GridSubtitle