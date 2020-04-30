import React from "react"
import Modal from "./modal"
import Form from "./form"

export default class OpenModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handleModalClick = this.handleModalClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handleModalClick(e) {
    e.preventDefault();
    this.setModal(true);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    
    return (
      <>
              <button className={`btn btn-${this.props.theme} my-3`} onClick={this.handleModalClick.bind(this)}>start for free</button>

        <Modal show={this.state.modalShow} onHide={() => this.setModal(false)}>
          <Form />
        </Modal>
      </>
    )
  }
}

OpenModal.defaultProps = {
  theme: "dark"
}