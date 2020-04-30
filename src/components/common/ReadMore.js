import React from "react"
import DownArrow from "../../images/assets/down-arrow-black.svg"

function ReadMore({ data, readMore }) {

    return (
        <>
            <div className="more-text">{data}</div>
            <img src={DownArrow} className={`icon ${readMore ? 'rotate':''}`} alt="chevron" />
        </>
    )
}

ReadMore.defaultProps = {
    data: "Read more",
    readMore: false
}

export default ReadMore