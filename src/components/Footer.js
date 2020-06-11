import React from "react"
import Fade from 'react-reveal/Fade';
import Col from 'react-bootstrap/Col'

function Contact(props) {

  const bg = props.data.image.childImageSharp.fluid.src


  return (
          <Col xs={12}>
            <div className="contact-bg py-5 text-center" style={{ background: 'linear-gradient(to right bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(' + bg + ') 40% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <Fade>
                <div className="social-contact">
                  {props.data.socialmedia.map((key) => <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-2x fa-${key.name}`}></i></a>)}
                </div>
                <div className="text"><i className="fas fa-location-arrow mt-3"></i> {props.data.address} </div>
                <div className="text"><i className="far fa-envelope"></i> <a href={`mailto:${props.data.email}`}> {props.data.email}</a></div>
              </Fade>
            </div>
          </Col>
       )
}

export default Contact 