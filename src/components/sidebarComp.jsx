import React, { Component, Fragment } from "react";

class SidebarComponent extends Component {
  render() {
    return (
      <Fragment>
        <aside id="sidebar">
          <div id="nav-blog" className="sidebar-item">
            <h3>What you can do</h3>
            <a href="#" className="btn btn-success">
              Create article
            </a>
          </div>
          <div id="search" className="sidebar-item">
            <h3>Search</h3>
            <p>Find what you are looking for</p>
            <form action="">
              <input type="text" name="search" id="" />
              <input type="submit" value="Search!" className="btn" />
            </form>
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default SidebarComponent;
