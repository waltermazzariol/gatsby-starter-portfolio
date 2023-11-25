import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
function GridColumn({ data }) {
  return (
    <>
      {data.map((key, index) => (
        <div key={index} className="row justify-content-center mb-2">
          <div className="col-md-2 col-sm-12">
            <div className="box-image mt-1">
              <GatsbyImage
                image={key.image.childImageSharp.gatsbyImageData}
                className="fluido"
                alt={key.name}
              />
            </div>
          </div>
          <div className="col-md-8 col-sm-12 grid-column">
            <h3 className="grid-column-title">{key.name}</h3>
            <div className="grid-column-source">
              <i className="fab fa-linkedin-in"></i> | {key.position}
            </div>
            <p>{key.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GridColumn;
