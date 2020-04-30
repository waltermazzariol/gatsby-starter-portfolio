import React from "react"



function Portfolio(props) {

  return (
    <section id={props.anchor}>
      <div className="container">
       {props.children}
      </div>
    </section>
  )
}

Portfolio.defaultProps = {
 
}

export default Portfolio