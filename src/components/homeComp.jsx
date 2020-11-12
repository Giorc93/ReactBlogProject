import React, { Component, Fragment } from "react";
import ArticlesComponent from "./articlesComp";
import SidebarComponent from "./sidebarComp";
import SliderComponent from "./sliderComp";

class HomeComponent extends Component {
  render() {
    return (
      <Fragment>
        <SliderComponent
          title="Welcome to the App!"
          btn="Go to blog"
          size="silder-big"
        />
        <div className="center">
          <section id="content">
            <h2>Last Articles</h2>
            <ArticlesComponent home="true" />
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default HomeComponent;
