import React from "react"
import { Fade } from "react-awesome-reveal"
function Hero(props) {

  return (
    <div as={"header"} className="hero hero-boxed">
      <img className="hero-img" src={props.data.image.publicURL} alt="hero background"/>
      <Fade>
        <div className="hero-wrapper d-flex flex-column justify-content-center align-items-center" >
          <div className="hero-pre-title text-white">{props.data.pretitle}</div>
          <h1 className="hero-title text-white">{props.data.title}</h1>
          <div className="hero-subtitle text-white">{props.data.subtitle}</div>
          <span>
            <a className="button mt-4 me-2" href={props.nav.cta_link} target="_blank" rel="noopener noreferrer">{props.nav.cta_button}</a>
          </span>
        </div>
      </Fade>
    </div>
  )
}
export default Hero
