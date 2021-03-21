import React from "react"
import styled from 'styled-components'

import logo from "../assets/images/logo-wansite-light.svg"

const FooterContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #141414;
`

const FooterWrapper = styled.div`
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
    &:hover{
      color: ${props => props.theme.PrimaryColor};
      text-decoration: none;
    }
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
    <FooterContainer
      style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + bg + ')' }}>
          <FooterWrapper className="d-flex flex-column justify-content-center align-items-center text-center">
            {data.social_icons !== undefined ?
              <SocialIcon>
                {data.social_icons.map((key) => <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fa-2x ${key.name}`} aria-label="social button"></i></a>)}
              </SocialIcon> : ""}
            {data.description ? <FooterText><i className="fas fa-location-arrow mt-3 mr-1"></i> {data.description} </FooterText> : ""}
            {data.title ? <FooterText><i className="fas fa-phone fa-flip-horizontal mt-3 mr-1"></i> <a href={data.title}> {data.title}</a></FooterText> : ""}
          </FooterWrapper>
        <div className="bg-dark text-light text-center">
          <a href="https://wansite.co" target="_blank" rel="noreferrer"><Logo src={logo} alt="wansite logo" /></a>
        </div>
    </FooterContainer>
  )
}

Footer.defaultProps = {
  data: {
    title: "",
    description: ""
  }
}

export default Footer 