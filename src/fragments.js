import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_description
    ua
    lang
  }
}`

export const navigationFields = graphql`
fragment navigationFields on DataJson {
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
}`

export const portfolioFields = graphql`
fragment portfolioFields on DataJson {
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
}`

export const heroFields = graphql`
fragment heroFields on DataJson {
  hero {
    image {
        publicURL
    }
    subtitle
    title
  }
}`

export const aboutFields = graphql`
fragment aboutFields on DataJson {
  about {
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        resize {
          width
          height
        }
      }
    }
    list {
      text
    }
    text
    title
  }
}`

export const servicesFields = graphql`
fragment servicesFields on DataJson {
  services {
    description
    icon {
      publicURL
    }
    title
  }
}`

export const teamFields = graphql`
fragment teamFields on DataJson {
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
}`

export const contactFields = graphql`
fragment contactFields on DataJson {
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
}`

export const galleryFields = graphql`
fragment galleryFields on DataJson {
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
}`

export const tagsFields = graphql`
fragment tagsFields on DataJson {
  tags {
    cookie_accept
    cookie_message
    date
    event
    location
    viewless
    viewmore
    not_found_title
    not_found_message
    not_found_btn
  }
}`