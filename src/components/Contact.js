import React from "react"
import Col from 'react-bootstrap/Col'

function Contact(props) {

  return (
          <Col xs={12}>
            <div className="contact-bg py-5 text-center">
              <div className="social-contact">
                  {props.data.socialmedia.map((key) => <a className="text-white me-3" key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-2x fa-${key.name}`}  aria-label='icon'></i></a>)}
              </div>
              <div className="text-white"><i className="fas fa-location-arrow mt-3"></i> {props.data.address} </div>
                  <div className="text-white">
                    <i className="far fa-envelope"></i> 
                    <a className="text-white" href={`mailto:${props.data.email}` }> {props.data.email}</a>
                  </div>
              </div> 
          </Col>
       )
}

export default Contact 