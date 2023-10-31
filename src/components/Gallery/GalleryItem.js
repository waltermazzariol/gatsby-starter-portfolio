import React, {useState} from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import {GatsbyImage} from "gatsby-plugin-image"

import GalleryCarousel from "./Carousel"

function CreateGallery(props) {

  const [modalShow, setModalShow] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  function handlePortfolioClick(index) {
    setModalShow(true)
    setCurrentImg(index)
  }

    return (<>
      <Container className="gallery" fluid>
        <Row>
            { props.data.map((key, index) => 
                <Col xs={6} md={3} key={index}  className="g-0" onClick={()=> handlePortfolioClick(index)}>
                    <GatsbyImage image={key.image.childImageSharp.gatsbyImageData} alt={key.alt} />
                </Col>
                )} 
        </Row>
      </Container>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <GalleryCarousel images={props.data} current={CurrentImg} />
        </Modal.Body>
      </Modal></>
    )
}

export default CreateGallery