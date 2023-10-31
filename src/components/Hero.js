import React from "react"
import { Fade } from "react-awesome-reveal"
function Hero(props) {

  return (
    <div as={"header"} className="hero">
      <img className="hero-img" src={props.data.image.publicURL} alt="background"/>
      <div className="hero-wrapper d-flex flex-column justify-content-center align-items-center text-center" >
            <Fade><h1 className="hero-title">{props.data.title}</h1></Fade>
            <Fade><div className="hero-subtitle">{props.data.subtitle}</div></Fade>
            <Fade><button className="btn-basic mt-4"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-${props.nav.cta_type} me-2`}></i>{props.nav.cta_button}</a></button></Fade>
      </div>
    </div>
  )
}
export default Hero
