import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero/Hero"

export const navData = graphql`  
query {
  markdownRemark {
      frontmatter {
        siteurl
        title
        ...metasFields
        ...heroFields
        ...navFields
      }
    }
  }
`
const NotFoundPage = (props) => (
  <Layout nav={props.data.markdownRemark.frontmatter.navegation}>
    <SEO page={'404'} title={props.data.markdownRemark.frontmatter.title} metas={props.data.markdownRemark.frontmatter.metas} siteurl={props.data.markdownRemark.frontmatter.siteurl} />
    <Hero theme={props.data.markdownRemark.frontmatter.theme} data={props.data.markdownRemark.frontmatter.hero} />
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

