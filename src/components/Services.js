import React from "react"

function Services({ data }) {

  return (
    <>
      {data.map((key, index) =>
        <div key={index} className="col-lg-3 col-md-6">
              <div className="px-3 my-3">
              <img src={key.icon.publicURL} className="mb-2" alt={`icon-${index}`} />
              <h3 className="mb-2">{key.title}</h3>
              <p className="text-muted mb-0">{key.description}</p>
              </div>
        </div>)}
    </>
  )
}

export default Services