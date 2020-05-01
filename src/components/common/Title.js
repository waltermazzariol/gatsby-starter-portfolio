import React from "react"

// core component
import Line from "./Line"

// Library components
import Fade from 'react-reveal/Fade'
import Col from 'react-bootstrap/Col'

function Title({ title}) {

    return (
        <Col lg={12} className="py-3">
          <Fade up>
            <h2 className="text-center">{title}</h2>
            <Line />
          </Fade>
        </Col>
    )
}

Title.defaultProps = {
    title: "Title"
}

export default Title