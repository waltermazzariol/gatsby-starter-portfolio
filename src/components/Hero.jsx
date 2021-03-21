import React from "react"
import styled from "styled-components";

const HeroContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #141414;
`
const HeroWrapper = styled.div`
    min-height: 60vh;
`
const HeroTitle = styled.div`
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.1rem;
    @media (min-width: 768px){
      font-size: 3.5rem;
    }
    @media (min-width: 1024px){
      font-size: 4rem;
    }
    @media (min-width: 1280px){
      font-size: 4.5rem;
      max-width: 100%;
    }
`
const HeroDescription = styled.div`
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-size: 1rem;
`
const HeroButton = styled.a`
    color: #ffffff;
    background-color: ${props => props.theme.PrimaryColor};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 8px 15px;
    min-width: 140px;
    font-size: 0.775rem;
    border-radius: 4px;
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
    &:hover {
        background-color: ${props => props.theme.SecundaryColor};
        color: #ffffff;
        
    }
`

function Hero({ data }) {
  try {
    var bg = data.fileImage.imageURL || ""
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e)
    }
  }

  return (
    <HeroContainer
      style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + bg + ')' }}>
      <HeroWrapper className="d-flex flex-column justify-content-center align-items-center text-center">
        {data.title ? <HeroTitle>{data.title}</HeroTitle> : ""}
        {data.description ? <HeroDescription>{data.description}</HeroDescription> : ""}
        {data.button_title !== undefined ?
          <HeroButton href={data.button_url} target="_blank" rel="noopener noreferrer">
            {data.button_title}
          </HeroButton>
          : ""}
      </HeroWrapper>
    </HeroContainer>
  )
}


export default Hero