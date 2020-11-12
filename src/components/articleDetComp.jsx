import React, { Component, Fragment } from "react";
import axios from "axios";
import Global from "../Global";
import SidebarComponent from "./sidebarComp";
import Moment from "react-moment";
import { Link } from "react-router-dom";

class ArticleDetailComponent extends Component {
  state = {
    article: {},
    status: null,
  };

  getArticle = () => {
    var id = this.props.match.params.id;
    axios
      .get(Global.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
          status: true,
        });
      })
      .catch((err) => {
        this.setState({
          article: { err: err },
          status: false,
        });
      });
  };

  componentWillMount() {
    this.getArticle();
  }
  render() {
    return (
      <Fragment>
        <div className="center">
          <section id="content">
            {!this.state.status && this.state.article.err && (
              <div>
                <h2 className="sub-header">Article Does Not Exist</h2>
              </div>
            )}
            {this.state.article.title === undefined && !this.state.article.err && (
              <div>
                <h2 className="sub-header">Loading Article</h2>
              </div>
            )}
            {this.state.status && (
              <div id="articles">
                <article className="article-item article-detail">
                  <div className="image-wrap">
                    <img
                      src={Global.url + "getImage/" + this.state.article.image}
                      alt="artImg"
                    />
                  </div>
                  <h1 className="sub-header">{this.state.article.title}</h1>
                  <span className="date">
                    <Moment fromNow>{this.state.article.date}</Moment>
                  </span>
                  <p>{this.state.article.content}</p>
                  <Link to="/blog" className="btn btn-edit">
                    Edit Article
                  </Link>
                  <Link to="/blog" className="btn btn-delete">
                    Delete Article
                  </Link>
                  <div className="clearfix"></div>
                </article>
              </div>
            )}
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default ArticleDetailComponent;
