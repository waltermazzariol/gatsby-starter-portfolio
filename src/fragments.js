import { graphql } from 'gatsby'

export const metasFields = graphql`
fragment metasFields on MarkdownRemarkFrontmatter {
  metas {
    description
    twitterUsername
    lang
    ua
    image {
      publicURL
    }
  }
}`

export const componentFields = graphql`
fragment componentFields on MarkdownRemarkFrontmatter {
    components{  
      type
      active
    }
  }`

export const navFields = graphql`
    fragment navFields on MarkdownRemarkFrontmatter {
      navegation {
        site_name
        logo_active
        translate
        logo_url {
          publicURL
        }
        menu {
          nav
          link
        }
        button
        link
      }
    }`

export const heroFields = graphql`
fragment heroFields on MarkdownRemarkFrontmatter {
    hero{  
    title
      subtitle
      image {
        publicURL
          }
    }
}`

export const galleryFields = graphql`
    fragment galleryFields on MarkdownRemarkFrontmatter {
      gallery {
        title
        gallery {
          image {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }`

export const portfolioFields = graphql`
    fragment portfolioFields on MarkdownRemarkFrontmatter {
      portfolio {
        title
        projects {
          name
          type
          link
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
  
      }
    }`

export const projectsFields = graphql`
    fragment projectsFields on MarkdownRemarkFrontmatter {
      projects {
        title        
        projects {
          name
          link
          type
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }`

export const aboutFields = graphql`
    fragment aboutFields on MarkdownRemarkFrontmatter {
      about {
        title
        description {
          p
        }
        fluid: image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fixed: image {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        list{
          text
        }
      }
    }`

export const testimonialFields = graphql`
    fragment testimonialFields on MarkdownRemarkFrontmatter {
      testimonio{
        title
        list{
          name
          position
          testimonio
          source
          image {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                  src
                }
              }
          }
        }
        
      }
    }`

export const contactFields = graphql`
    fragment contactFields on MarkdownRemarkFrontmatter {
      contact {
        phone
        email
        address
        socialmedia {
          link
          name
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }`

export const cookiesFields = graphql`
    fragment cookiesFields on MarkdownRemarkFrontmatter {
      cookies {
        message
        button
      }
    }`

export const instagramFields = graphql`
    fragment instagramFields on MarkdownRemarkFrontmatter {
      instagram{
        title
        key
      }
    }`

export const calendarFields = graphql`
    fragment calendarFields on MarkdownRemarkFrontmatter {
      calendar{
        title
        key
      }
    }`

export const mediaFields = graphql`
    fragment mediaFields on MarkdownRemarkFrontmatter {
      media{
        title
        iframe{
          link
          name
        }
      }
    }`

export const processFields = graphql`
    fragment processFields on MarkdownRemarkFrontmatter {
      process{
        title
        description
        icon{
          publicURL
        }
      }
    }`

export const optionFields = graphql`
    fragment optionFields on MarkdownRemarkFrontmatter {
      options{
        viewmore
        viewless
      }
    }`