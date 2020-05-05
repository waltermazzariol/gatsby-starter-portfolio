import React from "react"

// Libraries 
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'

// Core components
import Title from "../components/Common/Title"
import List from "../components/Common/List"
import Section from "../components/Common/Section"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero/Hero.js"
import GridRowItem from "../components/Portfolio/GridRowItem"
import GalleryItem from "../components/Gallery/GalleryItem.js"
import GridColumnItem from "../components/GridColumnItem.js"
import Services from "../components/Services.js"
import Contact from "../components/Contact.js"
import CookiesConsent from "../components/Cookies.js"


function IndexPage(props) {

  const contentJson = props.data.dataJson
  
  return (
    <Layout nav={contentJson.navigation} >

      <Seo page={'inicio'} title={contentJson.navigation.title} lang={contentJson.general.lang} metas={contentJson.general} image={contentJson.about.image.childImageSharp} />

      <Hero data={contentJson.hero} />

      <Section anchor={'portfolio'} className={'grid-row'}>
        <Title title={contentJson.portfolio.title} />
        <GridRowItem data={contentJson.portfolio.projects} />
      </Section>

      <Section anchor={'gallery'} className={'gallery'} fluid={true} noGutters={true}>
        <Title title={contentJson.gallery.title} />
        <GalleryItem image={contentJson.gallery.gallery} />
      </Section>

      <Section anchor={'about'} className={'about'} >
        <Title title={contentJson.about.title} />
        <Col md="12" lg="5" align="text-center">
          <Fade>
            <Img className="shadow-image" fluid={contentJson.about.image.childImageSharp.fluid} alt="profile" />
          </Fade>
        </Col>
        <Col md="12" lg="7">
          <Fade>
            <div className="mb-4"> {contentJson.about.text.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</div>
            <div className="row">
              <Col md="6" lg="6">
                <List data={contentJson.about.list.slice(0, contentJson.about.list.length / 2)} />
              </Col>
              <Col md="6" lg="6">
                <List data={contentJson.about.list.slice(contentJson.about.list.length / 2, contentJson.about.list.length)} />
              </Col>
            </div>
          </Fade>
        </Col>
      </Section>

      <Section anchor={'reviews'} className={'grid-column'} >
        <Title title={contentJson.team.title} />
        <GridColumnItem data={contentJson.team.person} />
      </Section>

      <Section anchor={'services'} className={'services my-4'} fluid={true} noGutters={true}>
        <Services data={contentJson.services} />
      </Section>

      <Section anchor={'contact'} className={'contact'} fluid={true} noGutters={true}>
        <Contact data={contentJson.contact} />
      </Section>

      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout >
  )
}

export default IndexPage


export const imageData = graphql`
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
