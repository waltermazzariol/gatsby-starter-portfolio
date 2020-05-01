import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Section(props) {

  return (
    <section id={props.anchor} className={props.className}>
      <Container fluid={props.fluid} >
        <Row noGutters={props.noGutters} >
          {props.children}
        </Row>
      </Container>
    </section>
  )
}

Section.defaultProps = {
  fluid: false,
  noGutters: false
}

export default Section