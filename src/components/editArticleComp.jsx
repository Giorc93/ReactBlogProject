import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";
import Global from "../Global";
import SidebarComponent from "../components/sidebarComp";

class EditArticleComponent extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();
  articleId = null;

  state = {
    article: {},
    status: null,
    file: null,
  };

  componentWillMount() {
    // Custom validation messages
    this.validator = new SimpleReactValidator({
      messages: {
        required: "This field is required",
      },
    });
    this.articleId = this.props.match.params.id;
    this.getArticle(this.articleId);
  }

  getArticle = (id) => {
    axios
      .get(Global.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
        });
      })
      .catch((err) => {
        this.setState({
          article: { err: err },
        });
      });
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
    this.validator.showMessages();
    this.forceUpdate();
  };

  editArticle = (e) => {
    e.preventDefault();
    // Saving form data to state (article)
    this.changeState();
    // Check validations
    if (this.validator.allValid()) {
      // Sending POST HTTP req
      axios
        .put(Global.url + "article/" + this.articleId, this.state.article)
        .then((res) => {
          if (res.data.articleUpdated) {
            this.setState({
              article: res.data.articleUpdated,
              status: "waiting",
            });
            Swal.fire({
              title: "Success",
              text: "Article has been successfuly edited",
              icon: "success",
              timer: 1000,
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
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        status: "failed",
      });
    }
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
            <h2 className="sub-header">Edit Article</h2>
            {this.state.article.title && (
              <form className="full-form" onSubmit={this.editArticle}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    ref={this.titleRef}
                    defaultValue={this.state.article.title}
                    onChange={this.changeState}
                  />
                  {this.validator.message(
                    "title",
                    this.state.article.title,
                    "required|alpha_num_space"
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea
                    name="content"
                    ref={this.contentRef}
                    defaultValue={this.state.article.content}
                    onChange={this.changeState}
                  ></textarea>
                  {this.validator.message(
                    "content",
                    this.state.article.content,
                    "required"
                  )}
                </div>
                <label className="form-group">
                  <label htmlFor="file0">Image</label>
                  <input type="file" name="file0" onChange={this.fileChange} />
                </label>
                <div className="clearfix"></div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Create"
                    className="btn btn-succes"
                  />
                </div>
              </form>
            )}
            {!this.state.article.title && (
              <h2 className="sub-header">Loading Article</h2>
            )}
          </section>
          <SidebarComponent blog="true" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default EditArticleComponent;
