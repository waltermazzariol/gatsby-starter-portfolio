import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

// Core components
import Title from "../components/Common/Title"
import Section from "../components/Common/Section"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero.js"
import Portfolio from "../components/Portfolio"
import GalleryItem from "../components/Gallery/GalleryItem.js"
import Reviews from "../components/Reviews.js"
import Services from "../components/Services.js"
import Contact from "../components/Contact.js"
import CookiesConsent from "../components/Cookies.js"
import About from "../components/About";


function IndexPage(props) {

  const contentJson = props.data.dataJson
  
  return (
    <Layout nav={contentJson.navigation} >

      <Hero data={contentJson.hero} nav={contentJson.navigation}/>

      <Section anchor={'portfolio'} className={'grid-row'}>
        <Title title={contentJson.portfolio.title} />
        <Portfolio data={contentJson.portfolio.projects} />
      </Section>

      <Section anchor={'gallery'} className={'gallery'} fluid={true} rowClass={"g-0"}>
        <Title title={contentJson.gallery.title} />
        <GalleryItem data={contentJson.gallery.list} />
      </Section>

      <Section anchor={'about'} className={'about'} >
        <Title title={contentJson.about.title} />
        <About data={contentJson.about} />
      </Section>

      <Section anchor={'reviews'} className={'grid-column'} >
        <Title title={contentJson.team.title} />
        <Reviews data={contentJson.team.person} />
      </Section>

      <Section anchor={'services'} className={'services my-4'} fluid={true} rowClass={"g-0"}>
        <Services data={contentJson.services} />
      </Section>

      <Section anchor={'location'} className={'contact'} fluid={true} rowClass={"g-0"}>
        <Contact data={contentJson.contact} />
      </Section>

      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout >
  )
}

export default IndexPage

export function Head(props) {
  return (
    <Seo 
      page={'inicio'} 
      title={props.data.dataJson.navigation.title} 
      lang={props.data.dataJson.general.lang} 
      metas={props.data.dataJson.general} 
      image={props.data.dataJson.about.image.publicURL} 
    />
  )
  }


export const data = graphql`
  query{
      dataJson {
        ...aboutFields
        ...contactFields
        ...galleryFields
        ...generalFields
        ...heroFields
        ...navigationFields
        ...portfolioFields
        ...servicesFields
        ...tagsFields
        ...teamFields
  }  
}
`
