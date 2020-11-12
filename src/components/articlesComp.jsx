import React, { Component, Fragment } from "react";
// Importing Axios to send HTTP req
import axios from "axios";
import Global from "../Global";
import Moment from "react-moment";
import { Link } from "react-router-dom";
// Spanish format
// import "moment/locale/es";

class ArticlesComponent extends Component {
  state = {
    articles: [],
    status: false,
  };

  componentWillMount() {
    var home = this.props.home;
    var searchSt = this.props.search;

    if (home === "true") {
      this.getLastArticles();
    } else if (searchSt && searchSt !== null && searchSt !== undefined) {
      this.searchResult(searchSt);
    } else {
      this.getArticles();
    }
  }

  searchResult = (searchSt) => {
    axios
      .get(Global.url + "search/" + searchSt)
      .then((res) => {
        if (res.data.articles.length >= 1) {
          this.setState({
            articles: res.data.articles,
            status: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          articles: [],
          status: true,
        });
      });
  };

  getLastArticles = () => {
    /* Creating GET req and saving data to state*/

    axios.get(Global.url + "articles/last").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: true,
      });
    });
  };
  getArticles = () => {
    /* Creating GET req and saving data to state*/

    axios.get(Global.url + "articles").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: true,
      });
    });
  };
  render() {
    if (this.state.articles.length >= 1 && this.state.status === true) {
      return (
        <Fragment>
          <div>
            <h2>Articles</h2>
            {this.state.articles.map((article, id) => {
              return (
                <article
                  className="article-item"
                  id="article-template"
                  key={id}
                >
                  <div className="image-wrap">
                    <img
                      src={Global.url + "getImage/" + article.image}
                      alt="test-img"
                    />
                  </div>
                  <h2>{article.title}</h2>
                  <span className="date">
                    {/* Using Moment to format date */}
                    <Moment fromNow>{article.date}</Moment>
                  </span>
                  <Link to={"/blog/article/" + article._id}> See more</Link>
                  <div className="clearfix"></div>
                </article>
              );
            })}
          </div>
        </Fragment>
      );
    } else if (this.state.articles.length === 0 && this.state.status === true) {
      return (
        <Fragment>
          <div>
            <h2>No Articles To Show</h2>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div>
            <h2>Loading Articles</h2>
          </div>
        </Fragment>
      );
    }
  }
}

export default ArticlesComponent;
