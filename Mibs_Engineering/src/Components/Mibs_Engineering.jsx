import React, { useState } from "react";
import MibsEngeering from "../Images/MibsEngeering.jpeg";
import Camera from "../Images/camera.png";
import logo from "../Images/logo.png";
const MibsEngineering = () => {
  const [CoreValues] = useState([
    "Integrity",
    "customer focus",
    "innovation",
    "quality excellence",
    "collaboration",
    "environmental responsibility",
    "employee development",
  ]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="MibsEngeeringImage"
            style={{
              height: "400px",
              backgroundImage: `url(${MibsEngeering})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              display: "flex",
              justifyContent: "end",
              alignItems: "flex-start",
              padding: "5px 0px",
            }}
            data-aos="fade-down-right"
          >
            <img src={logo} alt="" srcset="" />
          </div>

          <div className="mibs_engeering_content mt-4">
            <div className="row justify-content-center row-gap-4">
              <div className="col-lg-4 col-md-6 col-12">
                <h3
                  className="d-flex gap-3 align-items-center"
                  data-aos="fade-up"
                >
                  <i
                    class="fa-regular fa-paper-plane"
                    style={{
                      backgroundColor: "#3f3f78",
                      width: "55px",
                      borderRadius: "50%",
                      height: "55px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#dbd9d9c4",
                      padding: "25px 0px",
                      fontSize: "26px",
                    }}
                  ></i>
                  <span>Mission</span>
                </h3>
                <p
                  className="lh-lg mt-3"
                  style={{ color: "gray" }}
                  data-aos="flip-left"
                >
                  At MIBS Engineering, our mission is to deliver exceptional
                  products and services that exceed customer expectations. We
                  are committed to fostering long-term relationalships with our
                  clients by providing reliable, innovative, and cost-effective
                  solutions.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <h3
                  className="d-flex gap-3 align-items-center"
                  data-aos="fade-down"
                >
                  <img
                    src={Camera}
                    width={"50px"}
                    height={"50px"}
                    style={{
                      backgroundColor: "#bc8103",
                      width: "55px",
                      borderRadius: "50%",
                      height: "55px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#dbd9d9c4",
                      padding: "7px",
                    }}
                    alt=""
                    srcset=""
                  />{" "}
                  <span>Vision</span>
                </h3>
                <p
                  className="lh-lg mt-3"
                  style={{ color: "gray" }}
                  data-aos="flip-right"
                >
                  To be a leading provider of innovative and reliable switchgear
                  solutions, recognized for our commitment to engineering
                  excellence, customer satisfaction, and lasting value.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <h3
                  className="d-flex gap-3 align-items-center"
                  data-aos="fade-right"
                >
                  <i
                    class="fa-solid fa-box-archive"
                    style={{
                      backgroundColor: "rgb(155 153 149)",
                      width: "55px",
                      borderRadius: "50%",
                      height: "55px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#dbd9d9c4",
                      padding: "7px",
                    }}
                  ></i>
                  <span>Core Values</span>
                </h3>
                <ul
                  className="lh-lg mt-3"
                  style={{ color: "gray", listStyle: "none" }}
                  data-aos="flip-up"
                >
                  {CoreValues.map((Element) => (
                    <>
                      <li className="text-capitalize">&#10070; {Element}.</li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MibsEngineering;
