import React from "react"
import GalleryModal from "./Modal"
import GalleryCarousel from "./Carousel"
import Title from "../Title"

import Container from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

const GalleryWrapper = styled.div`
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  a {
    display: block;
    max-width: 100%;
    height: 500px;
  }
  @media (min-width: 768px) {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
  }
`

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
    return (
      <Container className="pb-5 px-0">
        <Row noGutters>
          {this.props.data.title ? <Title data={this.props.data.title} />:""}
          {this.props.data.list !== undefined ? <>
            {this.props.data.list.map((key, index) =>
                <GalleryWrapper key={index} style={{ backgroundImage: `url(${key.fileImage.imageURL})`, backgroundSize: 'cover' }}>
                  <a href={key.fileImage.imageURL} onClick={this.handlePortfolioClick.bind(this, index)}>
                  </a>
                </GalleryWrapper>
            )}</>: ""}
          <GalleryModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
            <GalleryCarousel images={this.props.data.list} current={this.state.modalCurrent} />
          </GalleryModal>
        </Row>
      </Container>
    )
  }
}