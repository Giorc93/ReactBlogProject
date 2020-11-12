import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import SidebarComponent from "./sidebarComp";

// Form Validations & Alerts

class NewArticleComponent extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: {},
    status: null,
    file: null,
  };

  fileChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
  };

  saveArticle = (e) => {
    e.preventDefault();
    // Saving form data to state (article)
    this.changeState();
    // Sending POST HTTP req

    axios
      .post(Global.url + "save", this.state.article)
      .then((res) => {
        if (res.data.articleStored) {
          this.setState({
            article: res.data.articleStored,
            status: "waiting",
          });
          // Uploading file
          if (this.state.file !== null) {
            // Get saved article id
            var articleId = this.state.article._id;
            // Create form data and add file
            const formData = new FormData();

            formData.append("file0", this.state.file, this.state.file.name);
            // Ajax req
            axios
              .post(Global.url + "uploadImage/" + articleId, formData)
              .then((res) => {
                if (res.data.articleUpdated) {
                  this.setState({
                    article: res.data.articleUpdated,
                    status: "success",
                  });
                }
              })
              .catch((err) => {
                this.setState({
                  status: "failed",
                });
                console.log(err);
              });
          } else {
            this.setState({
              status: "success",
            });
          }
        }
      })
      .catch((err) => {
        this.setState({
          status: "failed",
        });
        console.log(err);
      });
  };
  render() {
    if (this.state.status === "success") {
      return <Redirect to={"/blog"} />;
    }
    return (
      <Fragment>
        {this.state.status === "failed" && (
          <div>
            <h2 className="sub-header">
              Oops! Something went wrong, try again.
            </h2>
          </div>
        )}
        <div className="center">
          <section id="content">
            <h2 className="sub-header">Create Article</h2>
            <form className="full-form" onSubmit={this.saveArticle}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  ref={this.titleRef}
                  onChange={this.changeState}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  name="content"
                  ref={this.contentRef}
                  onChange={this.changeState}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="file0">Image</label>
                <input type="file" name="file0" onChange={this.fileChange} />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create"
                  className="btn btn-succes"
                />
              </div>
            </form>
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}
export default NewArticleComponent;
