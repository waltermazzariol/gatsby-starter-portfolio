import React, { useState } from "react"
import Img from "gatsby-image"
import Zoom from 'react-reveal/Zoom';
import ReadMore from "./Common/ReadMore"
import Title from "./Common/Title"

function Portfolio({ data, anchor, options, themeColor }) {

  const [open, setOpen] = useState(false);

  function createPortfolio(works) {
    const Portfolio = works.map((key, index) =>
      <Zoom key={index}>
        <div className="col-lg-4 col-sm-6 portfolio">
          <a className="portfolio-box box" href={key.link} target="_blank" rel="noopener noreferrer">
            <Img fluid={key.image.childImageSharp.fluid}
              alt={key.name}
            />
            <div className="portfolio-box-over"></div>
          </a>
          <div className="row">
            <div className="col-12 portfolio-text">
              <h3 className="project-name">
                <a className="portfolio-box" href={key.link} target="_blank" rel="noopener noreferrer">
                  {key.name}
                </a>
              </h3>
            </div>
            <div className="col-12 portfolio-text">
              <div className="project-category">
                <a className="portfolio-box" href={key.link} target="_blank" rel="noopener noreferrer">
                  {key.type}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    )
    return Portfolio
  }

  return (
    <section id={anchor}>
      <div className="container">
        <Title title={data.title} themeColor={themeColor} />
        <div className="row">
          {open ? createPortfolio(data.projects) : createPortfolio(data.projects.slice(0, 3))}
          {(data.projects.length > 3) ?
          <div className="col-12 text-center mt-3 mb-5">
              <button className="more"
                onClick={() => setOpen(!open)}
                aria-expanded={open}>
                {open ? <ReadMore data={options.viewless} readMore={true}/> : <ReadMore data={options.viewmore} />}
              </button>
            </div> : ""}
        </div>
      </div>
    </section>
  )
}

Portfolio.defaultProps = {
  options: {
    viewmore: "Read more",
    viewless: "Read less"
  }
}

export default Portfolio