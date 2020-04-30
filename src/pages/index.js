import React from "react"
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero/Hero.js"
import AboutUs from "../components/About/About.js"
import Portfolio from "../components/Portfolio/Portfolio.js"
import PortfolioItem from "../components/Portfolio/PortfolioItem"
import Title from "../components/Common/Title"
import Testimonial from "../components/Testimonial.js"
import Process from "../components/Process.js"
import Gallery from "../components/Gallery/Gallery.js"
import CookiesConsent from "../components/Cookies.js"
import Footer from "../components/Footer.js"

function IndexPage(props) {

  const themeColor = props.pageContext.color
  const data = props.data.markdownRemark.frontmatter

  return (
    <Layout nav={data.navegation} themeColor={themeColor} >
      <Seo page={'inicio'} title={data.title} metas={data.metas} siteurl={data.siteurl} />
      <Hero theme={data.theme} data={data.hero} themeColor={themeColor} />
      <Portfolio anchor={'portfolio'} >
        <Title title={data.title} />
        <PortfolioItem  />
      </Portfolio>
      <Gallery data={data.gallery} options={data.options} themeColor={themeColor} />
      <AboutUs theme={data.theme} data={data.about} options={data.options} themeColor={themeColor} />
      <Testimonial data={data.testimonio} anchor={'testimonial'} themeColor={themeColor} />
      <Process data={data.process} />
      <Footer data={data.contact} themeColor={themeColor} />
      <CookiesProvider>
        <CookiesConsent data={data.cookies} />
      </CookiesProvider>
    </Layout >
  )
}

export default IndexPage


export const imageData = graphql`
  query{
    markdownRemark(frontmatter: {path: {eq: "/"}}) {
        frontmatter {
            theme
            title 
            siteurl
            ...componentFields
            ...metasFields
            ...navFields
            ...heroFields 
            ...aboutFields 
            ...instagramFields 
            ...calendarFields 
            ...galleryFields 
            ...testimonialFields 
            ...portfolioFields 
            ...projectsFields 
            ...contactFields 
            ...mediaFields 
            ...processFields 
            ...cookiesFields 
            ...optionFields
      }
    }
  }  
`
