import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-bootstrap"
import {GatsbyImage} from "gatsby-plugin-image"

const PortfolioCarousel = ({ images, current }) => {
  const carouselItems = images.map((key, index) =>
    <Carousel.Item key={index}>
      <figure>
        <GatsbyImage className="w-100" image={key.image.childImageSharp.gatsbyImageData} alt="gallery"/>
        <figcaption>
          <div className="bottom-bar">
            <div className="counter">{index + 1} of {key.length}</div>
          </div>
        </figcaption>
      </figure>
    </Carousel.Item>
  );

  return (
    <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
      {carouselItems}
    </Carousel>
  );
}

PortfolioCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel