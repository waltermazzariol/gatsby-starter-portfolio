import React from "react"

function Grid(props) {
    
    return (
        <div className={`col-xs-${props.xs} col-sm-${props.xs} col-md-${props.md} col-lg-${props.lg} ${props.align}`}>
            {props.children}
        </div>
       )
}

Grid.defaultProps = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    align: ""
}

export default Grid