import React from "react"

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Title from "./Title"
import GridTitle from "./GridTitle"
import GridSubtitle from "./GridSubtitle"
import GridImage from "./GridImage"

function GridColumn({ data }) {
    return (
        <Container className="py-5">
            <Row>
                {data.title ? <Title data={data.title} /> : ""}
                {data.list ? data.list.map((key, index) =>
                    <Col xs={12} md={6} lg={4} className="gridcolumn mb-5" key={index}>
                        <Row>
                            {key.fileImage ?
                                <Col xs={12}>
                                    <a href={key.url} target="_blank" rel="noopener noreferrer">
                                        <GridImage data={key.fileImage.imageURL} />
                                    </a>
                                </Col>
                                : ""}
                            <Col xs={12}>
                                <GridTitle>
                                    <a href={key.url} target="_blank" rel="noopener noreferrer">
                                        {key.name}
                                    </a>
                                </GridTitle>
                            </Col>
                            <Col xs={12}>
                                <GridSubtitle>
                                    <a href={key.url} target="_blank" rel="noopener noreferrer">
                                        {key.subtitle}
                                    </a>
                                </GridSubtitle>
                            </Col>
                        </Row>
                    </Col>
                ) : ""}
            </Row>
        </Container>
    )
}

export default GridColumn