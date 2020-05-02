import React from "react"
import Zoom from 'react-reveal/Zoom';

function PortfolioItem(props) {

    return (
        <>
            {props.data.map((key, index) =>
            <Zoom key={index}>
                <div className="col-sm-6 col-lg-4 portfolio">
                    {key.image !== undefined ?
                    <div className="col-12">
                        <a className="portfolio-box portfolio-box-shadow box-image" href={key.link} target="_blank" rel="noopener noreferrer">
                            <img src={key.image.childImageSharp.fluid.src} className="fluido" alt={key.name} />
                            <div className="portfolio-box-over"></div>
                        </a>
                    </div> : ''}
                    
                        <div className="col-12">
                            <h3 className="portfolio-box-title">
                                <a className="portfolio-box" href={key.link} target="_blank" rel="noopener noreferrer">
                                    {key.name}
                                </a>
                            </h3>
                        </div>
                        <div className="col-12">
                            <div className="portfolio-box-subtitle">
                                <a className="portfolio-box" href={key.link} target="_blank" rel="noopener noreferrer">
                                    {key.type}
                                </a>
                            </div>
                        </div>
                  
                </div>
            </Zoom>
        )}
        </>
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