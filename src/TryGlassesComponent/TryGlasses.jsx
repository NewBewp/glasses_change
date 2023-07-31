import React, { Component } from "react";
import data from "../data/dataGlasses.json";
console.log("data: ", data);

export default class TryGlasses extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return data.map((glassesItem, index) => {
      return (
        <img
          className="me-3 p-2 py-2 border"
          onClick={() => {this.changeGlasses(glassesItem)}}
          style={{ width: 120, cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const styleGallasses = {
      width: "144px",
      top: "80px",
      right: "120px",
      opacity: "0.8",
    };

    const infoGallasses = {
      width: 250,
      top: 200,
      left: 318,
      paddingLeft: 15,
      backgroundColor: "rgba(255, 127, 0,.5)",
      textAlign: "left",
      height: 105,
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: 2000,
          minHeight: 2000,
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: 2000 }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,128)" }}
            className="text-center p-4 text-light"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: 250 }}
                    src={"./glassesImage/model.jpg"}
                    alt="model.jpg"
                  />
                  <img
                    className="position-absolute"
                    style={styleGallasses}
                    src={this.state.glassesCurrent.url}
                    alt="v1.png"
                  />
                  <div style={infoGallasses} className="position-relative">
                    <span
                      style={{ fontWeight: "bold", color: "rgba(0,0,128)" }}
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <br />
                    <span style={{ fontSize: 13, fontWeight: 300 }}>
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: 250 }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          {/* chua kinh dc chon */}
          <div className="bg-light container mt-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}

////////////////////////////////
