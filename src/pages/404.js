import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Utils/Seo"
import Hero from "../components/Hero/Hero"

const NotFoundPage = (props) => (
  <Layout nav={props.data.dataJson.navigation} >
    <Seo page={"404"} 
        title={"404 page"} 
        lang={props.data.dataJson.general.lang} 
        metas={props.data.dataJson.general} 
        image={props.data.dataJson.about.image.publicURL} />
    <Hero data={props.data.dataJson.hero} nav={props.data.dataJson.navigation}/>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>{props.data.dataJson.tags.not_found_title}</h1>
          <p>{props.data.dataJson.tags.not_found_message}</p>
          <a className="button-basic text-white" href="/" >{props.data.dataJson.tags.not_found_btn}</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export function Head(props) {
  return (
    <Seo page={"404"} 
        title={"404 page"} 
        lang={props.data.dataJson.general.lang} 
        metas={props.data.dataJson.general} 
        image={props.data.dataJson.about.image.publicURL} />
  )
  }

export const data = graphql`  
query {
  dataJson {
    ...aboutFields
    ...generalFields
    ...heroFields
    ...navigationFields
    ...tagsFields
  }
}`