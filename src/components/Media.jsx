import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Title from "./Title"
import Video from "./Video"
import GridTitle from "./GridTitle"

import play from '../assets/images/play_button.svg'

import styled from "styled-components"

const VideoWrapper = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    padding-bottom: 60%;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
`
const VideoOverlay = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    bottom: 0;
    opacity: 1;
    background: rgba(0,0,0,0.4);
    animation: fadeOut 1s linear;
    transition: opacity 0.25s ease;
    &:hover{
        background: rgba(0,0,0,0.6);

    }
    }
`

function Media({ data }) {

    return (
        <Container className="pb-5">
            <Row className="justify-content-center">
                <Title data={data.title} />
                {data.video_id !== undefined ?
                    <Col xs="12" md="8" className="text-center mb-2">
                    <VideoWrapper as="a" href={data.video_id} target="_blank">
                        <Video data={data.video_id} />
                        <VideoOverlay>
                            <img loading="lazy" src={play} alt="play button" aria-controls="play-button"/>
                        </VideoOverlay>
                    </VideoWrapper>
                    </Col>
                    : ""}
                {data.description !== undefined ?
                <Col xs="12" md="8">
                    <GridTitle >{data.description}</GridTitle>
                </Col>
                 : ""}
            </Row>
        </Container>)
}

export default Media