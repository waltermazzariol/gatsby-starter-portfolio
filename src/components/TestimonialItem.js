import React from "react"
import Fade from 'react-reveal/Fade';

import Col from 'react-bootstrap/Col'

function Testimonial({ data }) {

  return (

    <Col>
      <ul>
        {data.map((key, index) =>
          <Fade key={index} left>
            <li>
              <div className="row justify-content-center">
                <div className="col-md-2 col-sm-12">
                  <div className="image">
                    <img src={key.image.childImageSharp.fluid.src} className="mx-auto img-fluid" alt="testimonio" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 testimonial">
                  <h3 className="testimonial-name">{key.name}</h3>
                  <div className="testimonial-position"><i className="fab fa-linkedin-in"></i> | {key.position}</div>
                  <p className="testimonial-testimonio">{key.description}</p>
                </div>
              </div>
            </li>
          </Fade>
        )}
      </ul>
    </Col>
  )
}

export default Testimonial