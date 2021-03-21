import React from "react"
import styled from "styled-components"

const Header = styled.h3`
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    color: ${props => props.theme.TitleColor};
    a {
        color: ${props => props.theme.TitleColor};
    }
`
function GridTitle({ children }) {

    return (
            <Header >{children}</Header>
    )
}

export default GridTitle