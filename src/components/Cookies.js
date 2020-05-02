import React, { Component } from "react"
import CookieIcon from "../images/assets/cookie.svg"
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class CookiesConsent extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            accepted: true,
            isServer: true
        };
      }

      handleClick() {
        const { cookies } = this.props;
        cookies.set('isAccepted', true, { path: '/' });
        this.setState({ accepted : true,
                        isServer : true  });
      }

      componentDidMount() {
        const { cookies } = this.props;
        this.setState({
          isServer: false,
          accepted: cookies.get('isAccepted') || false,
        })
      }
    

    render() {
    
        const { accepted, isServer } = this.state    
        const key = isServer ? `client` : `server`

        return (
            <section id="cookies" className={`cookies-custom ${accepted ? "": "active"}`} key={key}>
              <div className="container">
                <div className="row">
                  <div className="col-9 cookies-custom-text my-auto">{this.props.data.cookie_message}</div>
                  <div className="col-3 cookies-custom-icon">
                  <button onClick={this.handleClick} className="cookies-custom-accept">
                      <img src={CookieIcon} className="icon icon-cookie" alt="cookie icon"/>
                      <span>{this.props.data.cookie_accept}</span>
                  </button>
                  </div>
                </div>
              </div>
                
                
            </section>

        );
    }
}

export default withCookies(CookiesConsent);
