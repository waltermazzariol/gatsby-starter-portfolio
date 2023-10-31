import React from "react"
import {Row, Col} from 'react-bootstrap'
import List from "./Common/List"
import { GatsbyImage } from "gatsby-plugin-image"
function About(props) {

  return (
    <>
        <Col md="12" lg="5" align="text-center">
            <GatsbyImage className="shadow-image img-fluid mb-4" image={props.data.image.childImageSharp.gatsbyImageData} alt={props.data.alt} />
         </Col>
        <Col md="12" lg="7">
            <div className="mb-4"> {props.data.text.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</div>
            <Row>
                <Col md="6" lg="6">
                    <List data={props.data.list.slice(0, props.data.list.length / 2)} />
                </Col>
                <Col md="6" lg="6">
                    <List data={props.data.list.slice(props.data.list.length / 2, props.data.list.length)} />
                </Col>
            </Row>
        </Col>
        </>
       )
}

export default About 

