import React from "react"
import Fade from 'react-reveal/Fade'
import Line from "./Line"

function Title({ title}) {

    return (
      <div className="container my-1 h-100">
        <div className="col-sm-12 my-auto">
          <Fade up>
            <h2 className="text-center">{title}</h2>
            <Line />
          </Fade>
        </div>
      </div>
    )
}

Title.defaultProps = {
    title: "Title"
}

export default Title