import React, { Component, Fragment } from "react";
// Loading routing module
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Importing components
import HeaderComponent from "./components/headerComp";
import FooterComp from "./components/footerComp";
import ErrorComponent from "./components/errorComp";
import HomeComponent from "./components/homeComp";
import BlogComponent from "./components/blogComponent";
import FormComponent from "./components/formComponent";
import TestComponent from "./components/testComp";
import SecTestComponent from "./components/secTestComp";
import ArticleDetailComponent from "./components/articleDetComp";
import SearchResultComponent from "./components/searchResComp";
import NewArticleComponent from "./components/newArticleComp";
import EditArticleComponent from "./components/editArticleComp";

class RouterComponent extends Component {
  render() {
    return (
      <Fragment>
        {/* Creating routing structure 'BrowserRouter' */}
        <BrowserRouter>
          <HeaderComponent />

          {/*Sendind prop 
          <TestComponent title="Test Title Prop" /> */}
          {/* Using router to render components*/}
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/home" component={HomeComponent} />
            <Route exact path="/blog" component={BlogComponent} />
            <Route
              exact
              path="/blog/article/:id"
              component={ArticleDetailComponent}
            />
            <Route
              exact
              path="/blog/editArt/:id"
              component={EditArticleComponent}
            />
            <Route
              exact
              path="/blog/search/:searchSt"
              component={SearchResultComponent}
            />
            <Route exact path="/blog/newArt" component={NewArticleComponent} />
            <Route exact path="/form" component={FormComponent} />
            {/* Setting redirection route*/}
            <Route
              exact
              path="/redir/:search"
              render={(props) => {
                var searchSt = props.match.params.search;
                return <Redirect to={"/blog/search/" + searchSt} />;
              }}
            />

            {/* Testing routes */}
            <Route exact path="/page1" component={TestComponent} />
            <Route exact path="/page2" component={SecTestComponent} />

            {/* Sending URL parameters
                <Route
                  exact
                  path="/thirdTest/:id/:option?"
                  render={(props) => {
                    ** Catching params**
                    const id = props.match.params.id;
                    const option = props.match.params.option;
                    return (
                      <Fragment>
                        <h1>Third Test Component</h1>
                        <p>{id}</p>
                        <p>{option}</p>
                      </Fragment>
                    );
                  }}
                />*/}
            <Route component={ErrorComponent} />
          </Switch>

          <FooterComp />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default RouterComponent;
