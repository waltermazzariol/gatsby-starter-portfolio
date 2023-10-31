import React from "react"

function Line(props) {
    
    return (
            <center><hr className="divider" align={props.align}/></center>
       )
}

Line.defaultProps = {
    themeColor: "#666",
    align: "center"
}

export default Line