import React, { Component, Fragment } from "react";
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
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="form.html">Form</a>
                </li>
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
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
