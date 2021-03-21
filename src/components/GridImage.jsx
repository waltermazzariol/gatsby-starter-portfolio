import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    padding-bottom: 100%;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
`
const ImageOvarlay = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    bottom: 0;
    opacity: 0;
    background: rgba(0,0,0,0.4);
    animation: fadeOut 1s linear;
    transition: opacity 0.25s ease;
    &:hover {
        opacity: 1;
      }
    }
`
const Image = styled.img`
    content-visibility: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`

function GridImage({ data }) {

    return (
        <ImageWrapper >
            {data ? <Image src={data} alt="grid" />: <div className="bg-secundary"></div>}
            <ImageOvarlay />
        </ImageWrapper>
    )
}
GridImage.defaultProps = {
    data: ""
}
export default GridImage