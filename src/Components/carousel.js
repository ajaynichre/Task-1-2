/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import sneaker from "../Images/sneaker.png"
import nike from "../Images/nike.png"
import addidas from "../Images/adidas.png"
import whey from "../Images/whey-protein.png"

class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showStatus={false}
        >
          <div >
            <img
            
              src={`Images`+ "/carousel5.jpg"}
              height="500px"
            />
          </div>
          <div>
            <img
              src={`Images`+ "/carousel6.jpg"}
              height="500px"
            />
          </div>
          <div>
            <img
              src={`Images`+ "/carousel3.jpg"}
              height="500px"
            />
          </div>
          <div>
            <img
              src={`Images`+ "/carouse1.jpg"}
              height="500px"
            />
          </div>
        </Carousel>
        
        <div style={{ marginTop: "6rem" }}>
          <div
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
              fontWeight:"bolder"
            }}
          >
            Our Partners
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <img
                      src={sneaker}
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src={nike}
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src={addidas}
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src={whey}
                      height="100px"
                    />
                  </div>                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src={sneaker}
                      height="100px"
                    />
                  </div>
                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src={nike}
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src={addidas}
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src={whey}
                      height="100px"
                    />
                  </div>                 
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scrolling;
