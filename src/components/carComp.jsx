import React, { Component } from "react";

class CarComponent extends Component {
  /* Creating Fn in order to pass data from child to paren through prop fn argument*/
  favCar = () => {
    this.props.markFav(this.props.car);
  };
  render() {
    const car = this.props.car;

    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={car.image} alt="test-img" />
        </div>
        <h2>{car.model} </h2>
        <span className="date">{car.year} </span>
        <a href="#">See more</a>
        {/* Exec fn favCar on click*/}
        <button onClick={this.favCar}>Mark as Fav</button>
        <div className="clearfix"></div>
      </article>
    );
  }
}

export default CarComponent;
