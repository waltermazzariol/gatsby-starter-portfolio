import React from "react"
import Img from "gatsby-image"
import Zoom from 'react-reveal/Zoom';


function PortfolioItem(props) {

    return (
        <div className="row">{props.data.map((key, index) =>
            <Zoom key={index}>
                <div className="col-lg-4 col-sm-6 portfolio">
                    {key.image !== undefined ?
                        <a className="portfolio-box box" href={key.link} target="_blank" rel="noopener noreferrer">
                            <Img fluid={key.image.childImageSharp.fluid} alt={key.name} />
                            <div className="portfolio-box-over"></div>
                        </a> : ''}
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
        )}
        </div>
    )
}

PortfolioItem.defaultProps = {
    data: [{
        name: "The One Life Coaching",
        type: "Microsite • React | 2020",
        link: "https://theonelifecoaching.com",
    }]
}

export default PortfolioItem