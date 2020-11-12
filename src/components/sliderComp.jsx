import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class SliderComponent extends Component {
  render() {
    return (
      <Fragment>
        <div id="slider" className={this.props.size}>
          <h1>{this.props.title}</h1>
          {this.props.btn && (
            <NavLink to="/blog" className="btn-white">
              {this.props.btn}
            </NavLink>
          )}
        </div>
      </Fragment>
    );
  }
}

export default SliderComponent;
