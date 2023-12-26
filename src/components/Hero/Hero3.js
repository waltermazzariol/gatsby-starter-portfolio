import React from "react"
import { Fade } from "react-awesome-reveal"
function Hero3(props) {

  return (
    <div as={"header"} className="hero container my-5">
      <div className="row">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-3" >
            <Fade>
              <div className="hero-pre-title">{props.data.title}</div>
              <h1 className="hero-title">{props.data.title}</h1>
              <div className="hero-subtitle">{props.data.subtitle}</div>
              <span>
                <a className="button mt-4 me-2" href={props.nav.cta_link} target="_blank" rel="noopener noreferrer">{props.nav.cta_button}</a>
              </span>
            </Fade>
      </div>
      </div>
    </div>
  )
}
export default Hero3
