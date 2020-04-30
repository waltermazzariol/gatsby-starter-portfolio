import React from "react"
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';

import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero/Hero.js"
import AboutUs from "../components/About/About.js"
import Portfolio from "../components/Portfolio.js"
import Instagram from "../components/Instagram.js"
import Media from "../components/Media.js"
import Testimonial from "../components/Testimonial.js"
import Calendar from "../components/Calendar.js"
import Process from "../components/Process.js"
import Gallery from "../components/Gallery/Gallery.js"
import CookiesConsent from "../components/Cookies.js"
import Footer from "../components/Footer.js"
// import Form from "../components/form"

function IndexPage(props) {
    
    const themeColor = props.pageContext.color
    const data = props.data.music.frontmatter

    return (
      <Layout nav={data.navegation} themeColor={themeColor} >
        <Seo page={'inicio'} title={data.title} metas={data.metas} siteurl={data.siteurl} />
        {data.components.map((key, index) => {
          if(key.type === 'hero' && key.active){
            return <Hero key={index} theme={data.theme} data={data.hero} themeColor={themeColor}/>
          }
          else if(key.type === 'portfolio' && key.active){
            return <Portfolio key={index} data={data.portfolio} anchor={'portfolio'} options={data.options} themeColor={themeColor}/>
          }
          else if(key.type === 'gallery' && key.active){
            return <Gallery key={index} data={data.gallery} options={data.options} themeColor={themeColor}/>
          }
          else if(key.type === 'instagram' && key.active){
            return <Instagram key={index} data={data.instagram} options={data.options} themeColor={themeColor} />
          }
          else if(key.type === 'about' && key.active){
            return <AboutUs key={index} theme={data.theme} data={data.about} options={data.options} themeColor={themeColor}/>
          }
          else if(key.type === 'projects' && key.active){
            return <Portfolio key={index} data={data.projects} anchor={'project'} options={data.options} themeColor={themeColor}/>
          }
          else if(key.type === 'media' && key.active){
            return <Media key={index} data={data.media} themeColor={themeColor}/>
          }
          else if(key.type === 'testimonials' && key.active){
            return <Testimonial key={index} data={data.testimonio} anchor={'testimonial'} themeColor={themeColor}/>
          }
          else if(key.type === 'process' && key.active){
            return <Process key={index} data={data.process}/>
          }
          else if(key.type === 'contact' && key.active){
            return <Footer key={index} data={data.contact} themeColor={themeColor}/>
          }
          else if(key.type === 'calendar' && key.active){
            return <Calendar key={index} data={data.calendar} themeColor={themeColor}/>
          }
          // else if(key.type === 'form' && key.active){
          //   return <Form key={index} themeColor={themeColor}/>
          // }
          return ''
        } )}
        <CookiesProvider>
          <CookiesConsent data={data.cookies} />
        </CookiesProvider>
      </Layout>
    )
  }

export default IndexPage


export const imageData = graphql`
  query($slug: String!) {
    music: markdownRemark(fields: { slug: { eq: $slug } }) {
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
