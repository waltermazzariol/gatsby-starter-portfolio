import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './Scroller'
import styled from "styled-components"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);

  }

  render() {
    const Button = styled.button`
      background: ${this.props.themeColor}
  `;

    return (

      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-1" id="mainNav" expand="lg" collapseOnSelect={true}>
          <div className="container">
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>{this.props.nav.logo_active ? <img src={this.props.nav.logo_url.publicURL} alt="logo" /> : this.props.nav.site_name}</a>
            {this.props.nav.button === 'whatsapp' ? <div className="navbar-cta-music d-sm-block d-md-block d-lg-none"><Button as="a" href={this.props.nav.link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Button></div> : <div className="navbar-cta-music d-sm-block d-md-block d-lg-none"><Button as="a" href={this.props.nav.link} target="_blank" rel="noopener noreferrer">@</Button></div>}
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                  items={this.props.nav.menu.link}
                  currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  {this.props.nav.menu.slice(0, -1).map((key) =>
                    <li key={key.nav} className="nav-item">
                      <Nav.Link className="js-scroll-trigger nav-link-ltr" href={key.link} onClick={Scroller.handleAnchorScroll}>{key.nav}</Nav.Link>
                    </li>)}
                  {this.props.nav.translate ? <li className="nav-item">
                    <Link className="nav-link nav-link-ltr" to={this.props.nav.menu[this.props.nav.menu.length - 1].link}>{this.props.nav.menu[this.props.nav.menu.length - 1].nav}</Link>
                  </li> : ''}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
            {this.props.nav.button === 'whatsapp' ? <div className="navbar-cta-music d-none d-lg-block d-xl-block"><Button as="a" href={this.props.nav.link} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Button></div> : <div className="navbar-cta-music d-none d-lg-block d-xl-block"><Button as="a" href={this.props.nav.link} target="_blank" rel="noopener noreferrer">@</Button></div>}
          </div>
        </Navbar>
      </>
    );
  }
}

NavBar.defaultProps = {
  primary: "#666"
}