import React from "react"

function List(props) {

  return (
      <>
    {props.data.map((key) =>
        <li key={key.text} ><i className="fas fa-angle-double-right"></i>
          {key.text}
        </li>
      )}
      </>
)}

export default List