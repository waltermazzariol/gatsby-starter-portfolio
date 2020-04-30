import React, { useState } from "react"

import ReadMore from "../Common/ReadMore"
import CreateGallery from "./CreateGallery"
import Title from "../Common/Title"

function Gallery({ data, options, themeColor }) {
  
  const [open, setOpen] = useState(false);

  return (
    <section id="gallery">
      <div className="container-fluid p-0">
        <Title title={data.title} themeColor={themeColor} />
        <div className="row no-gutters p-0">
          {open ? <><CreateGallery image={data.gallery} /></> : <><CreateGallery image={data.gallery.slice(0, 4)} /></>}
          {(data.gallery.length > 4) ?
          <div className="col-12 text-center mt-3 mb-5">
            <button className="more"
              onClick={() => setOpen(!open)}
              aria-expanded={open}>
              {open ? (<ReadMore data={options.viewless} readMore={true} />) : (<ReadMore data={options.viewmore} />)}
            </button>
          </div>: ""}
        </div>
      </div>
    </section>
  )
}

export default Gallery