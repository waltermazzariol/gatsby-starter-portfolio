import React from "react"

// core component
import Line from "./Line"

// Library components
import Col from 'react-bootstrap/Col'

function Title({ title}) {

    return (
        <Col lg={12} className="py-3">
            <h2 className="text-center">{title}</h2>
            <Line />
        </Col>
    )
}

Title.defaultProps = {
    title: "Title"
}

export default Title