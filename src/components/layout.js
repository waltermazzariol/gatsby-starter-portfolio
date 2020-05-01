/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import "./layout.scss"
import logo from "../images/assets/logo-wansite.svg"


const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Navbar nav={this.props.nav} />
        <main>{this.props.children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-text">Copyright &copy; 2020 - <a href="https://guarapomedia.com" target="_blank" rel="noopener noreferrer"><img src={logo} className="icon icon-logo" alt="Guarapo Media" /></a></div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}