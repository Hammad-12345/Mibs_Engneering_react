import React from "react";
import AboutImage from "../Images/aboutsus.jpg";
// import Logo from "../Images/logo.png";
const Aboutus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="about_background ps-0 pe-0"
            style={{ minHeight: "350px" }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${AboutImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
              className="pt-4 pb-4"
            >
              <div
                className="aboutus_header d-flex flex-lg-row flex-column  align-items-lg-start align-items-center pt-3 pb-3"
                style={{ backgroundColor: "#252424cf" }}
              >
                {/* <div className="ps-2 pe-2">
                  <img
                    src={Logo}
                    width={"200px"}
                    height={"160px"}
                    alt=""
                    srcset=""
                  />
                </div> */}
                <div
                  className="About_header_content d-flex flex-column w-100 flex-lg-grow-1 text-center align-items-center text-light text-uppercase gap-2 display-6  pe-lg-5"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span className="display-2 fw-bold text-uppercase">
                    About
                  </span>
                  <span>Mibs Engineering</span>
                  <span>Your trusted switchgear partner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content_about">
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className=" fw-bold">Who we are</h2>
                <p className="fs-4 mt-3" style={{ textAlign: "justify" }}>
                  MIBS Engineering is a recently established company
                  specializing in the manufacturing and assembly of switchgear
                  products. With our small setup and a dedicated team, we aim to
                  provide high quality products that meet the specific needs of
                  our customers.
                </p>
              </div>
              <div
                className="col-lg-6 fs-3 text-success fw-bold"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <p className="lh-lg">
                  "There are no secrets to success. Success is the result of
                  perfection, hard work, learning from failure, loyalty &
                  persistence."
                </p>
                <span>Colin Powell.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
