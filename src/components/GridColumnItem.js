import React from "react"
import Fade from 'react-reveal/Fade';

import Col from 'react-bootstrap/Col'

function GridColumn({ data }) {

  return (

    <Col>
      <ul>
        {data.map((key, index) =>
          <Fade key={index} left>
            <li>
              <div className="row justify-content-center">
                <div className="col-md-2 col-sm-12">
                  <div className="box-image mt-1">
                    <img src={key.image.childImageSharp.fluid.src} className="fluido" alt="testimonio" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 grid-column">
                  <h3 className="grid-column-name">{key.name}</h3>
                  <div className="grid-column-position"><i className="fab fa-linkedin-in"></i> | {key.position}</div>
                  <p className="grid-column-testimonio">{key.description}</p>
                </div>
              </div>
            </li>
          </Fade>
        )}
      </ul>
    </Col>
  )
}

export default GridColumn