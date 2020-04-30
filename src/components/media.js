import React from "react"
import Fade from 'react-reveal/Fade';
import Title from "./Common/Title"

function Media({ data, themeColor }) {

  return (
    <section id="media">
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-lg-12 text-center title">
            <Title title={data.title} themeColor={themeColor} />
          </div>
          <div className="col-lg-6 media media-light">
            <div className="row w-100">
              <div className="col-12 mb-3">
                <Fade >
                  <h3>{data.iframe[0].name}</h3>
                </Fade>
              </div>
              <div className="col-12 ">
                <Fade >
                  <iframe title="youtube" src={data.iframe[0].link} width="100%" height="380" frameBorder="0"></iframe>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-6 media media-dark">
            <div className="row w-100">
              <div className="col-12 mb-3">
                <Fade>
                  <h3>{data.iframe[1].name}</h3>
                </Fade>
              </div>
              <div className="col-12 ">
                <Fade>
                  <iframe title="spotify" src={data.iframe[1].link} width="100%" height="380" frameBorder="0"></iframe>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media