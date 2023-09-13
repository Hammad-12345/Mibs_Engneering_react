import React, { useState } from "react";
import Myswitchgear1 from "../Images/Myswitchgear1.png";
import Myswitchgear2 from "../Images/Myswitchgear2.png";
import Myswitchgear3 from "../Images/Myswitchgear3.png";
import "./Footer.css";
const Footer = () => {
  const [Switchgear] = useState([
    {
      Img: Myswitchgear1,
      Category: "11-KV Consumer panel",
      Name: "Key Features",
      KeyFeature: [
        "Rated up to 25KA, 630AMP",
        "Impulse Withstand Voltage 95KV Peak",
        "No Wapda Approval Required",
      ],
    },
    {
      Img: Myswitchgear2,
      Category: "11-KV Wapda/industrial panel",
      Name: "Key Features",
      KeyFeature: [
        "P:44 2018 Wapda Specifications",
        "Rated up to 25KA, 630AMP",
        "Impulse Withstand Voltage 95KV Peak",
      ],
    },
    {
      Img: Myswitchgear3,
      Category: "Ring main unit(Rmu)",
      Name: "Key Features",
      SecondName: "Colours",
      KeyFeature: [
        "Rated up to 17.5KV, 630AMP",
        "Short Circuit Rating 21KA For 2 Sec",
        "Rated Short Circuit Making Capacity 40KA",
        "Impulse Withstand Voltage 95KV Peak",
      ],
      Colors: [
        "RMU Housing Colour",
        "Available",
        "RAL 5012-Blue",
        "RAL 6002-Green",
      ],
      Application:
        "Suited for all distribution application of rural & urban areas",
    },
  ]);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#aeaeffc7" }}>
        <div className="row">
          <div
            className="pt-3 pb-3 fs-3"
            style={{
              backgroundColor: "rgb(91 125 181 / 69%)",
              color: "white",
              textTransform: "uppercase",
            }}
            data-aos="fade-down"
          >
            MV Switchgear
          </div>
          <div className="Myswitchgear_content mt-4">
            <div className="row justify-content-center row-gap-4">
              {Switchgear.map((element) => (
                <>
                  <div className="col-lg-4 col-md-6 col-12  boxes  ">
                    <img
                      src={element.Img}
                      className="w-100 myswitchgearimage"
                      alt=""
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    ></img>

                    <div className="content_col_4 ps-sm-5 pe-sm-5 ps-md-0 pe-md-0">
                      <h5
                        className="category text-uppercase text-success mt-2"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {element.Category}
                      </h5>
                      <div
                        className="row heading"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <div className={element.Colors ? "col-6" : "col-12"}>
                          <h6
                            className="text-uppercase fw-bold"
                            style={{ color: "#262666" }}
                          >
                            {element.Name}
                          </h6>
                        </div>
                        {element.Colors ? (
                          <>
                            <div className="col-6 d-flex justify-content-center">
                              <h6
                                className="text-uppercase fw-bold d-sm-block d-none"
                                style={{ color: "#262666" }}
                              >
                                {element.SecondName}
                              </h6>
                            </div>
                          </>
                        ) : null}
                      </div>

                      <div className="keyfeature ">
                        <div className="row row-gap-3 ">
                          <div
                            className={
                              element.Colors ? "col-sm-7 col-12 " : "col-12 "
                            }
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                          >
                            <ul className="key" style={{ listStyle: "none" }}>
                              {element.KeyFeature.map((elementli) => (
                                <>
                                  <li
                                    style={{
                                      fontSize: "14px",
                                      color: "#262666",
                                    }}
                                  >
                                    <span> &#x2713;</span>
                                    {elementli}
                                  </li>
                                </>
                              ))}
                            </ul>
                          </div>
                          {element.Colors ? (
                            <>
                              <div
                                className="col-sm-5 col-12"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                              >
                                <h3
                                  className="d-block d-sm-none"
                                  style={{ color: "#262666" }}
                                >
                                  {element.SecondName}
                                </h3>
                                <ul style={{ listStyle: "none" }}>
                                  {element.Colors.map((color) => (
                                    <>
                                      <li
                                        style={{
                                          color: "#262666",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {color}
                                      </li>
                                    </>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : null}
                          {element.Application ? (
                            <>
                              <div
                                className="col-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                              >
                                <h6
                                  className="text-uppercase fw-bold"
                                  style={{ color: "#262666" }}
                                >
                                  Application
                                </h6>
                                <p style={{ color: "#262666" }}>
                                  {" "}
                                  {element.Application}
                                </p>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
