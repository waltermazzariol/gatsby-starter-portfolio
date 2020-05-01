import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero/Hero"

export const navData = graphql`  
query {
  dataJson {
    general {
      path
      siteurl
      seo_description
      ua
      lang
    }
    hero {
      image {
          publicURL
      }
      subtitle
      title
    }
    }
  }
`

const NotFoundPage = (props) => (
  <Layout nav={props.data.contentJson.navigation} >
  <Seo page={'inicio'} title={props.data.contentJson.navigation.title} metas={props.data.contentJson.general} image={props.data.contentJson.about.image.childImageSharp.fluid} />
  <Hero data={props.data.contentJson.hero} />
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>No se encuentra</h1>
          <p>Has entrada en una página que no existe... Regresa a nuestra página de inicio.</p>
          <a className="btn btn-xl btn-primary" href="/" >Inicio</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

