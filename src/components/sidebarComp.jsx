import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

class SidebarComponent extends Component {
  // Creating sarch string reference
  searchRef = React.createRef();

  state = {
    search: "",
    redir: false,
  };

  // Setting redir. fn
  searchRedir = (e) => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redir: true,
    });
  };
  render() {
    if (this.state.redir) {
      return <Redirect to={"/redir/" + this.state.search} />;
    }
    return (
      <Fragment>
        <aside id="sidebar">
          {this.props.blog === "true" && (
            <div id="nav-blog" className="sidebar-item">
              <h3>What you can do</h3>
              <Link to={"/blog/newArt"} className="btn btn-success">
                Create article
              </Link>
            </div>
          )}
          <div id="search" className="sidebar-item">
            <h3>Search</h3>
            <p>Find what you are looking for</p>
            <form onSubmit={this.searchRedir}>
              <input type="text" name="search" ref={this.searchRef} />
              <input type="submit" value="Search!" className="btn" />
            </form>
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default SidebarComponent;
