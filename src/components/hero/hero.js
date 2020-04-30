import React from "react"
import DownArrow from "../../images/assets/down-arrow.svg"
import Bounce from 'react-reveal/Bounce'
import Line from '../Common/Line'

function Hero(props) {
  var bg = props.data.image.publicURL
  // TODO: Poner select case
  return (
    <header className="masthead" style={{ height: '80vh', background: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + bg + ') 40% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-end">
          <div className="col-md-12 ">
            <h1 className="text-uppercase text-white portfolio text-center ">{props.data.title}</h1>
            <p className="text-white font-weight-light text-center">{props.data.subtitle}</p>
            <Line />
          </div>
          <div className="col-lg-8 align-self-baseline mx-auto">
          </div>
          <div className="col-lg-12 arrow text-center">
            <Bounce down>
              <img src={DownArrow} className="icon" alt="chevron" />
            </Bounce>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero