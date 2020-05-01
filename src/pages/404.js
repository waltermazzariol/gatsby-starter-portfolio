import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero/Hero"

export const navData = graphql`  
query {
  dataJson {
    about {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
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
    navigation {
      cta_button
      cta_link
      logo_active
      logo_url{
        publicURL
      }
      title
      menu{
        nav
        link
      }
    }
  }
}`

const NotFoundPage = (props) => (
  <Layout nav={props.data.dataJson.navigation} >
    <Seo page={'inicio'} title={props.data.dataJson.navigation.title} metas={props.data.dataJson.general} image={props.data.dataJson.about.image.childImageSharp.fluid} />
    <Hero data={props.data.dataJson.hero} />
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

