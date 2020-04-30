import React from "react"
import Fade from 'react-reveal/Fade'
import Line from "./Line"

function Title({ title, themeColor }) {

    return (
      <div className="container h-100">
        <div className="col-sm-12 my-auto">
          <Fade up>
            <h2 className="text-center">{title}</h2>
            <Line themeColor={themeColor} />
          </Fade>
        </div>
      </div>
    )
}

Title.defaultProps = {
    title: "Read more",
    themeColor: '#333'
}

export default Title