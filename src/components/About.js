import React from "react"
import {Col} from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image"
function About(props) {

  return (
    <>
        <Col md="12" lg="5" align="text-center">
            <GatsbyImage className="square-img mb-4" image={props.data.image.childImageSharp.gatsbyImageData} alt={props.data.alt} />
         </Col>
        <Col md="12" lg="7">
            <div className="mb-4"> {props.data.text.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</div>
        </Col>
        </>
       )
}

export default About 

