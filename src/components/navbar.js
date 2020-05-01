import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './Scroller'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);

  }

  render() {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg" collapseOnSelect={true}>
          <div className="container">
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>{this.props.nav.logo_active ? <img src={this.props.nav.logo_url.publicURL} alt="logo" /> : this.props.nav.title}</a>
            <div className="navbar-cta d-sm-block d-md-block d-lg-none"><a href={this.props.nav.link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></div>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                  items={this.props.nav.menu.link}
                  currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  {this.props.nav.menu.map((key) =>
                    <li key={key.nav} className="nav-item">
                      <Nav.Link className="js-scroll-trigger nav-link-ltr" href={key.link} onClick={Scroller.handleAnchorScroll}>{key.nav}</Nav.Link>
                    </li>)}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
            <div className="navbar-cta d-none d-lg-block d-xl-block"><a href={this.props.nav.link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></div>
          </div>
        </Navbar>
    );
  }
}

NavBar.defaultProps = {
  primary: "#666"
}