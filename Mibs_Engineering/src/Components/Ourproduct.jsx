import React, { useState } from "react";
import ProductImage from "../Images/productbackgroundImage.jpeg";
import Product1 from "../Images/product1.jpeg.png";
import "./ourproduct.css";

const Ourproduct = () => {
  const [MediumVoltage] = useState([
    "Ring Main Unit(RMU)",
    "11-KV Industrial Panel",
    "11-KV Consumer Panel",
    "11-KV Wapda Panel",
  ]);
  const [LowVoltage] = useState([
    "LT Main Panels",
    "ATS/AMF Panels",
    "Synchronizing Panels",
    "PFI Panels",
    "Motor Control Centers",
    "Motor Control Units",
    "HVAC Panels",
    "Lights Control Panels",
    "Feeder Pillars",
    "IT Service Box",
    "Sub Main Dbs",
  ]);
  const [CabelTrays] = useState([
    "Hot Dip Galvnized",
    "Powder Cated",
    "Pre-Galvanized(with/without paint)",
    "With/Without Cover",
    "Perforated/Non-Perforated",
    "M.S Sheet",
    "G.I Sheet",
  ]);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div
            className="col-12 ps-0 pe-0"
            style={{
              minHeight: "600px",
              backgroundImage: `url(${ProductImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundColor: "#2e2d2b",
              backgroundBlendMode: "overlay",
            }}
          >
            <div
              className="our_product_header ps-2   d-flex flex-md-row flex-column row-gap-3  justify-content-center "
              style={{
                backgroundColor: "rgb(91 125 181 / 69%)",
              }}
            >
              <div
                className="pe-0"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src={Product1} className="w-100" alt="" srcset="" />
              </div>
            </div>

            <div className="container-fluid   pt-5 pb-5 mt-5">
              <div className="row text-light justify-content-center row-gap-4">
                <div
                  className="col-lg-4 col-md-6 col-12  ps-3 pe-3 d-md-block d-flex flex-column  "
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h3>Medium Voltage SwitchGear</h3>
                  <ul
                    className="d-flex flex-column gap-2 fs-6 mt-3 p-0 "
                    style={{ listStyle: "none" }}
                  >
                    {MediumVoltage.map((Element) => (
                      <>
                        <li className="d-flex gap-4 ">
                          {" "}
                          <i
                            class="fa-solid fa-location-arrow"
                            style={{
                              transform: "rotate(45deg)",
                              color: "#929292",
                            }}
                          ></i>{" "}
                          <span>{Element}</span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-12 ps-3 pe-3 d-md-block d-flex flex-column "
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h3>Low Voltage SwitchGear</h3>
                  <ul
                    className="p-0 d-flex flex-column gap-2 fs-6 mt-3 "
                    style={{ listStyle: "none" }}
                  >
                    {LowVoltage.map((Element) => (
                      <>
                        <li className="d-flex gap-4 ">
                          <i
                            class="fa-solid fa-location-arrow"
                            style={{
                              transform: "rotate(45deg)",
                              color: "#929292",
                            }}
                          ></i>{" "}
                          <span>{Element}</span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-12  ps-3 pe-3 d-md-block d-flex flex-column "
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h3>Cabel Trays & Ladders</h3>
                  <ul
                    className=" d-flex flex-column  gap-2 fs-6 mt-3 p-0  "
                    style={{ listStyle: "none" }}
                  >
                    {CabelTrays.map((Element) => (
                      <>
                        <li className="d-flex gap-4 text-center ">
                          {" "}
                          <i
                            class="fa-solid fa-location-arrow"
                            style={{
                              transform: "rotate(45deg)",
                              color: "#929292",
                            }}
                          ></i>
                          <span>{Element}</span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourproduct;
