import React from "react"
import { Fade } from "react-awesome-reveal"

function Hero2(props) {

  return (
    <div as={"header"} className="hero container my-5">
      <div className="row">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center order-2 order-md-1 mb-3" >
            <Fade>
              <div className="hero-pre-title">{props.data.pretitle}</div>
              <h1 className="hero-title">{props.data.title}</h1>
              <div className="hero-subtitle">{props.data.subtitle}</div>
              <span>
                <a className="button mt-4 me-2" href={props.nav.cta_link} target="_blank" rel="noopener noreferrer">{props.nav.cta_button}</a>
                <a className="button-outline mt-4" href={props.nav.cta_link} target="_blank" rel="noopener noreferrer">View projects</a>
              </span>
            </Fade>
      </div>
      <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-3" >
        <Fade><img className="img-fluid img-rounded img-squared" src={props.data.image.publicURL} alt="hero background"/></Fade>
      </div>
      </div>
    </div>
  )
}
export default Hero2
