import React from "react"
import styled from "styled-components"

const ImageItem = styled.img`
    content-visibility: auto;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
    max-width: 100%;
`
function Image({ data }) {

    return (
            <ImageItem src={data} alt="grid" />  
    )
}

export default Image