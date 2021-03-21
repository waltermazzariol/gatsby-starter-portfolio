import React from "react"

import Container from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Title from "./Title"
import GridTitle from "./GridTitle"
import GridSubtitle from "./GridSubtitle"
import GridImage from "./GridImage"

function GridRow({data}) {

    return (
        <Container id="gridrow" className="pb-5">
            <Row>
                {data.title ? <Title data={data.title} />:""}
                {data.list !== undefined ? data.list.map((key, index) =>
                    <Col key={index} xs={12} md={6} className="mb-3">
                            <Row className="align-items-center">
                            {key.fileImage !== undefined ?
                                <Col xs={12} md={4} className="mb-1">
                                    <GridImage data={key.fileImage.imageURL}/>
                                </Col>:""}
                                <Col xs={12} md={8} className="mb-1">
                                    <GridTitle>{key.name}</GridTitle>
                                    <GridSubtitle>{key.subtitle}</GridSubtitle>
                                </Col>
                            </Row>
                    </Col>
                ): ""}
            </Row>
        </Container>
    )
}

export default GridRow