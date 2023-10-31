import React from "react"

import Col from 'react-bootstrap/Col'

function GridColumn({ data }) {

  return (

    <Col>
      <ul>
        {data.map((key, index) =>
            <li key={index}>
              <div className="row justify-content-center">
                <div className="col-md-2 col-sm-12">
                  <div className="box-image mt-1">
                    <img src={key.image.publicURL} className="fluido" alt={key.name} />
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 grid-column">
                  <h3 className="grid-column-title">{key.name}</h3>
                  <div className="grid-column-source"><i className="fab fa-linkedin-in"></i> | {key.position}</div>
                  <p>{key.description}</p>
                </div>
              </div>
            </li>
        )}
      </ul>
    </Col>
  )
}

export default GridColumn