import React from "react"

function Line(props) {
    
    return (
            <hr className="divider" align={props.align}/>
       )
}

Line.defaultProps = {
    themeColor: "#666",
    align: "center"
}

export default Line