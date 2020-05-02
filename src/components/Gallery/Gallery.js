import React from "react"

function Gallery(props) {
  
  return (
    <section id="gallery">
      <div className="container-fluid p-0">
        {props.children}
      </div>
    </section>
  )
}

export default Gallery