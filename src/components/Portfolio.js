import React from "react"

function Portfolio(props) {

    return (
        <>
            {props.data.map((key, index) =>
                <div key={index} className="col-sm-6 col-lg-4 grid-row">
                    {key.image !== undefined ?
                    <div className="col-12">
                        <a className="grid-row-box box-image shadow-image" href={key.link} target="_blank" rel="noopener noreferrer">
                            <img src={key.image.publicURL} className="fluido" alt={key.name} />
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
        )}
        </>
    )
}
export default Portfolio