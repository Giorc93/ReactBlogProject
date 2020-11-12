import React, { Component, Fragment } from "react";
/* Importing NavLink ('NavLink' and 'to' instead of 'a' and 'href' ) allowing navbar links funct.*/
import { NavLink } from "react-router-dom";
import logo from "../assets/images/react-logo.svg";

class HeaderComponent extends Component {
  render() {
    return (
      <Fragment>
        <header id="header">
          <div className="center">
            <div id="logo">
              <img src={logo} alt="app-logo" />
              <span id="brand">
                {" "}
                <strong>React</strong>App
              </span>
            </div>
            <nav id="menu">
              <ul>
                <li>
                  {/*Adding class to active component using activeClassName*/}
                  <NavLink to="/home" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form" activeClassName="active">
                    Form
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/page1" activeClassName="active">
                    Page 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/page2" activeClassName="active">
                    Page 2
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="clearfix"></div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default HeaderComponent;
