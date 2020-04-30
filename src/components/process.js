import React from "react"
import Fade from 'react-reveal/Fade';

function Process({data}) {

    function createProcess (data) {
        
      const items = data.map((key, index) =>
        <div key={index} className="col-lg-3 col-md-6">
          <div className="mt-5">
            <Fade up>
            <img src={key.icon.publicURL} className="mb-4" alt={`icon-${index}`}/>
            <h3 className="h4 mb-2">{key.title}</h3>
            <p className="text-muted mb-0">{key.description}</p>
            </Fade>
          </div>
        </div>
        )
        return items
    }
    
    return (
        <section id="services">
          <div className="container-fluid mb-5">
            <div className="row px-2">
            {createProcess(data)}
            </div>
          </div>
        </section>
       )
}

export default Process