import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Title from "./Title"
import Image from "./Image"

function SplitString(props) {
    let text = props.data.toString();
    let newText = text.split('\\n').map((nstr, key) => <p className="mb-4" key={key}>{nstr}</p>);
    return newText;
}

function GridTwo({ data }) {

    return (
        <Container id="gridtwo" className="gridtwo pb-5">
            <Row>
                {data.title ? <Title data={data.title} />:""}
                {data.fileImage !== undefined ?
                    <Col xs="12" md="5" className="text-center mb-2">
                       {data.fileImage.imageURL ? <Image data={data.fileImage.imageURL} />: <div className="bg-secundary"></div>}
                    </Col>
                    : ""}
                {data.description !== undefined ?
                <Col xs="12" md="7">
                    <SplitString data={data.description} />
                </Col>
                 : ""}
            </Row>
        </Container>)
}

export default GridTwo