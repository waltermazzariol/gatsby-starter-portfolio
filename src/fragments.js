import { graphql } from 'gatsby'

export const generalFields = graphql`
fragment generalFields on DataJson {
  general {
    path
    siteurl
    seo_description
    seo_title
    seo_image
    ua
    lang
  }
}`

export const navigationFields = graphql`
fragment navigationFields on DataJson {
  navigation {
    cta_button
    cta_link
    cta_type
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
        publicURL
        childImageSharp {
          gatsbyImageData
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
        childImageSharp {
          gatsbyImageData
        }
    }
    subtitle
    title
  }
}`

export const aboutFields = graphql`
fragment aboutFields on DataJson {
  about {
    image {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
    }
    list {
      text
    }
    text
    title
    alt
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
        publicURL
        childImageSharp {
          gatsbyImageData
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
      publicURL
      childImageSharp {
        gatsbyImageData
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
    list {
      alt
      image {
        publicURL
        childImageSharp {
          gatsbyImageData
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
    not_found_title
    not_found_message
    not_found_btn
  }
}`