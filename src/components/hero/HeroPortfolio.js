import React from "react"
import Line from "../Common/Line"

function HeroPortfolio(props) {

  return (<>
    <div className="col-md-12 ">
      <h1 className="text-uppercase text-white portfolio text-center ">{props.data.title}</h1>
      <p className="text-white font-weight-light text-center">{props.data.subtitle}</p>
      <Line themeColor={props.themeColor} />
    </div>
    <div className="col-lg-8 align-self-baseline mx-auto">
    </div>
  </>
  )
}

export default HeroPortfolio
