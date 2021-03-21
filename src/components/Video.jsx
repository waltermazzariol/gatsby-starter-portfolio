import React, { useState, useEffect } from "react"
import styled from "styled-components"

const VideoItem = styled.img`
    content-visibility: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`
function Image({ data }) {
    const [id, setID] = useState([]);

    useEffect(() => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const link = data.match(regExp)
        if (link && link[2].length === 11) {
            setID(link[2])
        } else {
            console.log("error")
        }
    }, [data])

    return (<>
        {id[2] !== undefined ? <VideoItem src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="grid" /> : ""}
    </>)
}

export default Image