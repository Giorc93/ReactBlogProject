import React, { Component, Fragment } from "react";
import CarComponent from "./carComp";
import SidebarComponent from "./sidebarComp";
import SliderComponent from "./sliderComp";

class TestComponent extends Component {
  /*Setting State (Long)
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  */

  state = {
    count: 0,
    cars: [
      {
        year: 2018,
        model: "Ferrari LaFerrari",
        image:
          "https://bdc.autobild.es/sites/default/files/styles/body_768/public/dc/fotos/Ferrari-LaFerrari_2014_02.jpg?itok=CudSMRft",
      },
      {
        year: 2020,
        model: "Lamborghini Aventador",
        image:
          "https://ak.uecdn.es/p/110/sp/11000/thumbnail/entry_id/0_jazcffqi/version/100002/height/407",
      },
      {
        year: 2019,
        model: "Porsche Cayene",
        image:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-porsche-cayenne-coupe-105-1553197365.jpg?crop=1.00xw:0.957xh;0,0&resize=1200:*",
      },
      {
        year: 2021,
        model: "Audi R8",
        image:
          "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/58646/audi-r8_v10_decennium-2019-1600-01.jpg",
      },
    ],
    favCar: [""],
  };

  addVal = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  subVal = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  /* Creating Fn to retrieve data from child*/
  favFn = (data) => {
    this.setState({
      favCar: data,
    });
    console.log(this.state.favCar);
  };

  componentWillMount() {
    console.log("Exec before everything else loads");
  }

  componentDidMount() {
    console.log("Exec right after component loads");
  }

  componentDidUpdate() {
    console.log("Exec on changes");
  }

  componentWillUnmount() {
    console.log("Exec right before component unmounts");
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <SliderComponent title="Test Component" size="slider-small" />
        <div className="center">
          <section id="content">
            <h2>Counter</h2>
            <p>{this.state.count}</p>
            {/* Calling functions from class
        <p>
          <button onClick={this.addVal.bind(this)}>Add</button>
          <button onClick={this.subVal.bind(this)}>Subtract</button>
        </p>
        */}
            <p>
              <button onClick={this.addVal}>Add</button>
              <button onClick={this.subVal}>Subtract</button>
            </p>
            <hr />
            <h2>Sending Data from Child to Parent</h2>
            {/*If-else cond*/}
            {this.state.favCar.model ? (
              <h4>Favorite Car: {this.state.favCar.model}</h4>
            ) : (
              <h4>No fav car marked</h4>
            )}
            <hr />
            <h2>
              Listing and Mapping Arrays & Sending Data From Parent to Child
            </h2>
            {/* If condition 
        {this.state.favCar.model && (
          <h4>Favorite Car: {this.state.favCar.model}</h4>
        )}*/}

            <div>
              <ul>
                {/*Sending data to child trough props*/}
                {this.state.cars.map((item, index) => {
                  return (
                    /* Sending Fn to child as prop*/
                    <CarComponent key={index} car={item} markFav={this.favFn} />
                  );
                })}
              </ul>
            </div>
          </section>
          <SidebarComponent blog="false" />
          <div className="clearfix"></div>
        </div>
      </Fragment>
    );
  }
}

export default TestComponent;
