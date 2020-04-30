import React from "react"

function HeroMusic(props) {
  return (
    <div className="col-lg-5 col-md-12">
        <h1 className="text-uppercase text-white font-weight-regular music mt-5">{props.data.title}</h1>
        <p className="text-white font-weight-light">
            {props.data.subtitle} 
            {props.data.channels.length > 1 ?
            props.data.channels.map((key)=>
            <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-${key.name}`}></i></a>
            ): '' 
            }
        </p>
    </div>
  )
}

export default HeroMusic
