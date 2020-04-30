import React from "react"
import Fade from 'react-reveal/Fade';
import styled from "styled-components"

function Footer(props) {

  const Button = styled.i`
  color: white;
  &:hover {
    color: ${props.themeColor};
  }
`;
  const bg = props.data.image.childImageSharp.fluid.src


  return (
    <section className="bg-dark text-white" id="contact">
      <div className="footer-bg py-3" style={{background: 'linear-gradient(to right bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(' + bg + ') 40% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-5 px-5">
              <Fade>
                <div className="social-contact">
                  {props.data.socialmedia.map((key) => <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><Button as="i" className={`fab fa-2x fa-${key.name}`}></Button></a>)}
                </div>
                <div className="text"><i className="fas fa-location-arrow mt-3"></i> {props.data.address} </div>
                <div className="text"><i className="far fa-envelope"></i> <a href={`mailto:${props.data.email}`}> {props.data.email}</a></div>
              </Fade>
            </div>
          </div>
        </div>

      </div>
    </section>)
}

Footer.defaultProps = {
  themeColor: "#666"
}

export default Footer 