import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Section(props) {

  return (
      <Container id={props.anchor} className={props.className} fluid={props.fluid} >
        <Row className={props.rowClass} >
          {props.children}
        </Row>
      </Container>
  )
}

export default Section