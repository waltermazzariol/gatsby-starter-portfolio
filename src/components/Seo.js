/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ReactGA from "react-ga"

function Seo({metas}) {
  const trackingId = metas.ua;
  if (typeof window !== "undefined" && process.env.GATSBY_WORDPRESS_HOST!== 'dev' ) {
    ReactGA.initialize(trackingId);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }
  
  const metaTitle = metas.seo_title
  const metaDescription = metas.seo_description
  const imageURL = metas.siteurl+metas.seo_image
  const imageURLHeight = '1280'
  const imageURLWidth = '720'

  return (<>
    {/* <!-- Primary Meta Tags --> */}
    <title>{metaTitle}</title>
    <meta name="title" content={metaTitle} />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="description" content={metaDescription}/>

    {/* <!-- Open Graph / Facebook --/> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metas.siteurl} />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:image" content={imageURL} />
    <meta property= "og:image:width" content={imageURLWidth} />
    <meta property= "og:image:height" content={imageURLHeight} />

    {/* <!-- Twitter --/> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={metas.siteurl} />
    <meta property="twitter:title" content={metaTitle} />
    <meta property="twitter:description" content={metaDescription} />
    <meta property="twitter:image" content={imageURL} />
    </>)
}

export default Seo
