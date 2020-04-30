import React, { useState } from "react"
import Fade from 'react-reveal/Fade'
import ReadMore from "../Common/ReadMore"
import Title from "../Common/Title"
import Img from 'gatsby-image'

function About({ data, options, themeColor }) {
  const [open, setOpen] = useState(false);

  let yourArray = data.list;
  let halfwayThrough = Math.floor(yourArray.length / 2)

  let arrayFirstHalf = yourArray.slice(0, halfwayThrough);
  let arraySecondHalf = yourArray.slice(halfwayThrough, yourArray.length);

  function createList(props) {
    const listItems = props.map((number) =>
      <li key={number.text} ><i className="fas fa-angle-double-right"></i>{number.text}</li>
    );
    return <ul>{listItems}</ul>
  }
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <Title title={data.title} themeColor={themeColor} />
          <Fade>
            <div className="col-md-12 col-lg-5 mb-5 text-center">
              <Img className="bio-image" fluid={data.fluid.childImageSharp.fluid} alt="profile" />
            </div>
          </Fade>
            <Fade>
          <div className="col-md-12 col-lg-7">
              {data.description.slice(0, 2).map((key, index) => <p key={index} className="mb-4"> {key.p} </p>)}
              {data.list.length > 1 ?
                (<div className="row mt-3">
                  <div className="col-md-6">
                    {createList(arrayFirstHalf)}
                  </div>
                  <div className="col-md-6">
                    {createList(arraySecondHalf)}
                  </div>
                </div>
                ) : ('')
              }
          </div>
            </Fade>
          <div className="col-12 mt-3 mb-5">
            <Fade>
            {open ? data.description.slice(2, data.description.length).map((key, index) => <p key={index} className="mb-4"> {key.p} </p>) : ''}
            </Fade>
            {(data.description.length > 2) ?
              <div className="text-center">
                <button className="more"
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}>
                  {open ? <ReadMore data={options.viewless} readMore={true} /> : <ReadMore data={options.viewmore} />}
                </button>
              </div>
              : ""}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About