import React from "react"
import DownArrow from "../../images/assets/down-arrow.svg"
import Bounce from 'react-reveal/Bounce'
import HeroMusic from './HeroMusic'
import HeroPortfolio from './HeroPortfolio'

function Hero(props) {
  var bg= props.data.image.publicURL
// TODO: Poner select case
  return (
      <header className="masthead" style={{ height: '80vh', background: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('+bg+') 40% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-end">
                  {props.theme === 'music' ? 
                    <HeroMusic data={props.data} /> 
                    : 
                    <HeroPortfolio data={props.data} themeColor={props.themeColor}/>
                    }
                  <div className="col-lg-12 arrow text-center">
                    <Bounce down>
                        <img src={DownArrow} className="icon" alt="chevron"/>
                    </Bounce>
                  </div>
            </div>
          </div>
      </header>
      )
}

export default Hero