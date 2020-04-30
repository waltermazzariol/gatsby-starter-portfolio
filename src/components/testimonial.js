import React from "react"
import Fade from 'react-reveal/Fade';
import Title from "./Common/Title"

function Testimonial({ data, themeColor }) {

  function getTestimonials() {
    const listItems = data.list.map((key) =>
      <Fade key={key.name} left>
        <li key={key.name}>
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-12 mb-5">
              <div className="image">
                <img src={key.image.childImageSharp.fluid.src} className="mx-auto img-fluid" alt="testimonio" />
              </div>
            </div>
            <div className="col-md-8 col-sm-12 testimonial">
              <h3 className="testimonial-name">{key.name}</h3>
              <div className="testimonial-position"><i className="fab fa-linkedin-in"></i> | {key.position}</div>
              <p className="testimonial-testimonio">{key.testimonio}</p>
            </div>
          </div>
        </li>
      </Fade>
    );
    return <ul>{listItems}</ul>
  }

  return (
    <section id="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <Title title={data.title} themeColor={themeColor} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {getTestimonials()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial