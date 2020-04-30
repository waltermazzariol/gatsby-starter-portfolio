import React from "react"
import styled from "styled-components"

function Line(props) {

    const Hr = styled.div`
    .hr-style{ max-width: 3.25rem;
      border-width: 0.2rem;
      border-color: ${props.themeColor};
      margin-top: 0;
      margin-bottom: 2rem;}
   
  `;
    
    return (
        <Hr>
        <hr className="hr-style" align={props.align}/>
        </Hr>
       )
}

Line.defaultProps = {
    themeColor: "#666",
    align: "center"
}

export default Line