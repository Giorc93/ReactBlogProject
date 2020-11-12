import React, { Component, Fragment } from "react";
import ArticlesComponent from "./articlesComp";
import SidebarComponent from "./sidebarComp";
import SliderComponent from "./sliderComp";

class SearchResultComponent extends Component {
  state = {
    articles: {},
  };

  render() {
    var searchSt = this.props.match.params.searchSt;
    return (
      <Fragment>
        <SliderComponent title={"Search: " + searchSt} size="slider-small" />
        <div className="center">
          <section id="content">
            <h2>Search Results</h2>
            <ArticlesComponent search={searchSt} />
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default SearchResultComponent;
