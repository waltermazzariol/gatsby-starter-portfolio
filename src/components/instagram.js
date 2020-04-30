import React, { useState, useEffect } from "react"
import Zoom from 'react-reveal/Zoom';
import ReadMore from "./Common/ReadMore"
import Title from "./Common/Title"


function Instagram({ data, options, themeColor }) {
  const [loading, setLoading] = useState(false)
  const [picCounts, setpicCounts] = useState(0)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${data.key}`)
      .then(response => response.json())
      .then(resultData => {
        setpicCounts(resultData.data)
        setLoading(true)
      })
      .catch(function (error) {
        console.log('error con la API' + error.message);
      })
  }, [data.key])

  function createGallery(gallery) {
    const Gallery = gallery.map((key, index) =>

      <Zoom key={index}>
        <div className={`col-md-3 grid px-0`} style={{ backgroundImage: `url(${key.images.standard_resolution.url})`, backgroundSize: 'cover' }}>
          <a href={key.link} target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </Zoom>
    )
    return Gallery
  }

  return (
      <section id="gallery">
        <div className="container-fluid p-0">
        <Title title={data.title} themeColor={themeColor} />
          <div className="row no-gutters p-0">
            {loading ? open ? createGallery(picCounts.slice(0, 12)) : createGallery(picCounts.slice(0, 4)): ''}
            <div className="col-12 text-center mt-3 mb-5">
              <button className="more"
                onClick={() => setOpen(!open)}
                aria-expanded={open}>
                {open ? (<ReadMore data={options.viewless} readMore={true}/>) : (<ReadMore data={options.viewmore} />)}
              </button>
            </div>
          </div>
        </div>
      </section>  
  )
}
export default Instagram