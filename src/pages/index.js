import React from "react"
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero/Hero.js"
import PortfolioItem from "../components/Portfolio/PortfolioItem"
import GalleryItem from "../components/Gallery/GalleryItem.js"

import Title from "../components/Common/Title"
import Grid from "../components/Common/Grid"
import List from "../components/Common/List"
import Section from "../components/Common/Section"
import TestimonialItem from "../components/TestimonialItem.js"
import Services from "../components/Services.js"
import CookiesConsent from "../components/Cookies.js"
import Contact from "../components/Contact.js"

import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

function IndexPage(props) {

  const contentJson = props.data.dataJson

  return (
    <Layout nav={contentJson.navigation} >

      <Seo page={'inicio'} title={contentJson.navigation.title} metas={contentJson.general} image={contentJson.about.image.childImageSharp.fluid} />

      <Hero data={contentJson.hero} />

      <Section anchor={'portfolio'} className={'portfolio'}>
        <Title title={contentJson.portfolio.title} />
        <PortfolioItem data={contentJson.portfolio.projects} />
      </Section>

      <Section anchor={'gallery'} className={'gallery'} fluid={true} noGutters={true}>
        <Title title={contentJson.gallery.title} />
        <GalleryItem image={contentJson.gallery.gallery} />
      </Section>

      <Section anchor={'about'} className={'about'} >
        <Title title={contentJson.about.title} />
        
          <Grid md="12" lg="5" align="text-center">
            <Fade>
              <Img className="bio-image" fluid={contentJson.about.image.childImageSharp.fluid} alt="profile" />
            </Fade>
          </Grid>
          <Grid md="12" lg="7">
            <Fade>
              <p className="mb-4"> {contentJson.about.text} </p>
              <div className="row">
                <Grid md="6" lg="6">
                  <List data={contentJson.about.list.slice(0, contentJson.about.list.length / 2)} />
                </Grid>
                <Grid md="6" lg="6">
                  <List data={contentJson.about.list.slice(contentJson.about.list.length / 2, contentJson.about.list.length)} />
                </Grid>
              </div>
            </Fade>
          </Grid>
      </Section>

      <Section anchor={'testimonial'} className={'testimonial'} >
        <Title title={contentJson.team.title} />
          <TestimonialItem data={contentJson.team.person} />
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
        about {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          list {
            text
          }
          text
          title
        }
        contact {
          address
          email
          image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
          }
          phone
          socialmedia {
            link
            name
          }
        }
        gallery {
          gallery {
            alt
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
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
        portfolio {
          projects {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            name
            type
          }
          title
        }
        services {
          description
          icon {
            publicURL
          }
          title
        }
        tags {
          cookie_accept
          cookie_message
          date
          event
          location
          viewless
          viewmore
        }
        team {
          person {
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            position
            source
          }
          title
        }
      }    
  }  
`