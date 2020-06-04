import React from "react"
import Zoom from 'react-reveal/Zoom';

function GridRowItem(props) {

    return (
        <>
            {props.data.map((key, index) =>
            <Zoom key={index}>
                <div className="col-sm-6 col-lg-4 grid-row">
                    {key.image !== undefined ?
                    <div className="col-12">
                        <a className="grid-row-box grid-row-box-shadow box-image" href={key.link} target="_blank" rel="noopener noreferrer">
                            <img src={key.image.childImageSharp.fluid.src} className="fluido" alt={key.name} />
                            <div className="grid-row-box-over"></div>
                        </a>
                    </div> : ''}
                    
                        <div className="col-12">
                            <h3 className="grid-row-box-title">
                                <a className="grid-row-box" href={key.link} target="_blank" rel="noopener noreferrer">
                                    {key.name}
                                </a>
                            </h3>
                        </div>
                        <div className="col-12">
                            <div className="grid-row-box-subtitle">
                                <a className="grid-row-box" href={key.link} target="_blank" rel="noopener noreferrer">
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

GridRowItem.defaultProps = {
    data: [{
        name: "The One Life Coaching",
        type: "Microsite • React | 2020",
        link: "https://theonelifecoaching.com",
    }]
}

export default GridRowItem