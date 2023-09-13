import React from "react";
// import Logo from "../Images/logo.png";
import ServicesImage from "../Images/servicesimage.PNG";
import "./services.css";
const ServicesComponent = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row aboutus_header">
          {/* <div className="col-12 " style={{ backgroundColor: "rgb(13 7 53)" }}>
            <div className="d-flex align-items-center justify-content-md-start justify-content-center ">
              <div
                className="ps-2 pe-2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={Logo}
                  width={"200px"}
                  height={"160px"}
                  alt=""
                  srcset=""
                />
              </div>

              <div
                className="About_header_content text-center d-md-flex  d-none flex-grow-1 justify-content-center align-items-center text-uppercase gap-2  fw-normal display-2 pe-5 col-6"
                style={{ color: "orange" }}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <span>Mibs Services</span>
              </div>
            </div>

            <div
              className="Services_content text-center d-flex justify-content-center  d-md-none  text-uppercase fw-normal display-2  "
              style={{ color: "orange" }}
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <span>Mibs Services</span>
            </div>
          </div> */}

          <div
            className="services col-12 ps-0 pe-0"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={ServicesImage} alt="" srcset="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
