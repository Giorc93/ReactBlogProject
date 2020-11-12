import React, { Component, Fragment } from "react";
import ArticlesComponent from "./articlesComp";
import SidebarComponent from "./sidebarComp";
import SliderComponent from "./sliderComp";

class BlogComponent extends Component {
  state = {
    articles: {},
  };

  render() {
    return (
      <Fragment>
        <SliderComponent title="Blog" size="slider-small" />
        <div className="center">
          <section id="content">
            <h2>Blog Component</h2>
            <ArticlesComponent />
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default BlogComponent;
