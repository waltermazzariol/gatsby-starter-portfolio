import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

import logo from "../assets/images/logo-wansite-light.svg"


const FooterWrapper = styled.div`
  background-color: #333333;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const SocialIcon = styled.div`
  margin-top: 1rem;
    i {
          margin: 1rem;
          color: #FFFFFF;
          &:hover {
              color: ${props => props.theme.PrimaryColor};
          }
      }
`
const FooterText = styled.div`
  color: #FFFFFF;
  a {
    color: #d7d7d7;
  }
`
const Logo = styled.img`
  content-visibility: auto;
  padding:0.5rem;
  max-width: 70px
`

function Footer({ data }) {
  try {
    var bg = data.fileImage.imageURL || ""
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e)
    }
  }
  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={12}>
          <FooterWrapper style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(' + bg + ')' }}>
            {data.social_icons !== undefined ?
              <SocialIcon>
                {data.social_icons.map((key) => <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fa-2x ${key.name}`} aria-label="social button"></i></a>)}
              </SocialIcon> : ""}
            {data.description ? <FooterText><i className="fas fa-location-arrow mt-3"></i> {data.description} </FooterText> : ""}
            {data.title ? <FooterText><i className="fas fa-phone mt-3"></i> <a href={data.title}> {data.title}</a></FooterText> : ""}
          </FooterWrapper>
        </Col>
        <Col xs={12} className="bg-dark text-light text-center">
          <a href="https://wansite.co" target="_blank" rel="noreferrer"><Logo src={logo} alt="wansite logo" /></a>
        </Col>
      </Row>
    </Container>
  )
}

Footer.defaultProps = {
  data: {
    title: "",
    description: ""
  }
}

export default Footer 