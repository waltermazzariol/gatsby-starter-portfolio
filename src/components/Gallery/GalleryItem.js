import React from "react"
import Zoom from 'react-reveal/Zoom';
import GalleryModal from "./Modal"
import GalleryCarousel from "./Carousel"

export default class createGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    const images = this.props.image
    const className = this.props.className
    return (
      <>
        {images.map((key, index) =>
          <Zoom key={index}>
            <div key={index} className={`col-md-3 grid px-0 ${className}`} style={{ backgroundImage: `url(${key.image.childImageSharp.fluid.src})`, backgroundSize: 'cover' }}>
              <a href={key.image.childImageSharp.fluid.src} onClick={this.handlePortfolioClick.bind(this, index)}>
              </a>
            </div>
          </Zoom>
        )}
        <GalleryModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <GalleryCarousel images={images} current={this.state.modalCurrent} />
        </GalleryModal>
      </>
    )
  }
}