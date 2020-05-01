import { graphql } from 'gatsby'

export const metasFields = graphql`
fragment metasFields on DataJson {
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
