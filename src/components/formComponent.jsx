import React, { Component, Fragment } from "react";
import SidebarComponent from "./sidebarComp";
import SliderComponent from "./sliderComp";

class FormComponent extends Component {
  /* Using ref to get and save data from form */

  nameRef = React.createRef();
  surNameRef = React.createRef();
  bioRef = React.createRef();
  radManRef = React.createRef();
  radWomanRef = React.createRef();
  radOtherRef = React.createRef();

  state = {
    user: {},
  };

  getData = (e) => {
    e.preventDefault();

    var genreRef = "";

    if (this.radManRef.current.checked) {
      genreRef = this.radManRef.current.value;
    } else if (this.radWomanRef.current.checked) {
      genreRef = this.radWomanRef.current.value;
    } else {
      genreRef = this.radOtherRef.current.value;
    }

    var user = {
      name: this.nameRef.current.value,
      surName: this.surNameRef.current.value,
      biography: this.bioRef.current.value,
      genre: genreRef,
    };

    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <Fragment>
        <SliderComponent title="Form" size="slider-small" />
        <div className="center">
          <section id="content">
            <h2>Form Component</h2>
            {this.state.user.name && (
              <div>
                <p>
                  Name: <strong>{this.state.user.name}</strong>
                </p>
                <p>
                  Surname: <strong>{this.state.user.surName}</strong>
                </p>
                <p>
                  Biography: <strong>{this.state.user.biography}</strong>
                </p>
                <p>
                  Genre: <strong>{this.state.user.genre}</strong>
                </p>
              </div>
            )}
            {/* Calling onSubmit function or onChange*/}
            <form
              className="full-form"
              onSubmit={this.getData}
              onChange={this.getData}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                {/* Creating ref to save data from input */}
                <input type="text" name="name" ref={this.nameRef} />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" ref={this.surNameRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biography</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>
              <div className="form-group radio-button">
                <input
                  type="radio"
                  name="genre"
                  value="man"
                  ref={this.radManRef}
                />
                Man
                <input
                  type="radio"
                  name="genre"
                  value="woman"
                  ref={this.radWomanRef}
                />
                Woman
                <input
                  type="radio"
                  name="genre"
                  value="other"
                  ref={this.radOtherRef}
                />
                Other
              </div>
              <div className="clearfix"></div>
              <input type="submit" value="Send" className="btn btn-success" />
            </form>
          </section>
          <SidebarComponent blog="false" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default FormComponent;
