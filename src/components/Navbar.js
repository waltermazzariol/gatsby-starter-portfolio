import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './Scroller'

function NavBar(props) {
  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg" collapseOnSelect={true}>
      <div className="container">
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>{props.nav.logo_active ? <img src={props.nav.logo_url.publicURL} alt="logo" /> : props.nav.title}</a>
        <div className="navbar-cta d-sm-block d-md-block d-lg-none"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></div>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="navbar-nav ml-auto my-2 my-lg-0">
            <Scrollspy className="navbar-nav"
              items={['portfolio','gallery','about','reviews','contact']}
              currentClassName="active" rootEl={"#mainNav"} offset={-75}>
              {props.nav.menu.map((key) =>
                <li key={key.nav} className="nav-item">
                  <Nav.Link className="js-scroll-trigger nav-link-ltr" href={key.link} onClick={Scroller.handleAnchorScroll}>{key.nav}</Nav.Link>
                </li>)}
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-cta d-none d-lg-block d-xl-block"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></div>
      </div>
    </Navbar>
  );
}

export default NavBar