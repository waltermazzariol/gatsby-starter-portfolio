/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import ReactGA from 'react-ga'


function SEO({page, description, lang, title, metas, image }) {
  const trackingId = metas.ua;
  if(trackingId !== ""){
    ReactGA.initialize(trackingId);
    ReactGA.pageview(`/${page}`);
  }
  
  
  const metaDescription = description || metas.seo_description
  console.log(image.resize)
  const imageURL = metas.siteurl+image.fluid.src
  const imageURLHeight = image.resize.height
  const imageURLWidth = image.resize.width

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} | ${metaDescription}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: imageURL,
        },
        {
          property: "og:image:width",
          content: imageURLWidth,
        },
        {
          property: "og:image:height",
          content: imageURLHeight,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metas.siteurl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: imageURL,
        },
        {
          name: `twitter:creator`,
          content: metas.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metas)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  metas: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
