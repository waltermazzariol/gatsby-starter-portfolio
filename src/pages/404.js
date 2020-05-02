import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero/Hero"

export const navData = graphql`  
query {
  dataJson {
    ...aboutFields
    ...generalFields
    ...heroFields
    ...navigationFields
    ...tagsFields
  }
}`

const NotFoundPage = (props) => (
  <Layout nav={props.data.dataJson.navigation} >
    <Seo page={'inicio'} 
        title={props.data.dataJson.navigation.title} 
        lang={props.data.dataJson.general.lang} 
        metas={props.data.dataJson.general} 
        image={props.data.dataJson.about.image.childImageSharp} />
    <Hero data={props.data.dataJson.hero} />
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>{props.data.dataJson.tags.not_found_title}</h1>
          <p>{props.data.dataJson.tags.not_found_message}</p>
          <a className="btn btn-xl btn-primary" href="/" >{props.data.dataJson.tags.not_found_btn}</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

