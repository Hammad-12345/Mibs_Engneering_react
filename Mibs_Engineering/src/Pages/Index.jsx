import React, { useState } from "react";
import indexpageimage from "../Images/indexpae.jpeg";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import "../App.css";

const Index = () => {
  const [opennavsmall, updatenavsmall] = useState(false);
  const smallnav = () => {
    if (opennavsmall) {
      updatenavsmall(false);
    } else {
      updatenavsmall(true);
    }
  };

  const mountedStyle = "inAnimation 0.5s ease-in forwards";
  const unmountedStyle = "outAnimation 1s ease-out forwards";

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${indexpageimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgb(11 47 23 / 76%)",
        backgroundBlendMode: "overlay",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <div className="logo d-flex justify-content-lg-center align-items-center">
        <Link to={"/"}>
          <img src={Logo} className="indexlogo" alt="" srcset="" />
        </Link>

        <div className="flex-grow-1 d-flex justify-content-end pe-2 ps-2 d-lg-none">
          <i class="fa-solid fa-list fs-2 text-light" onClick={smallnav}></i>
        </div>
      </div>

      <div className="container d-lg-block d-none">
        <div className="row">
          <ul className="navbar-nav  flex-row  gap-3  ps-3 pe-3 pb-2  text-uppercase fw-bold">
            <li
              className="nav-item ps-5 pe-5 text-light rounded"
              style={{ backgroundColor: "#3943b3" }}
            >
              <Link className="nav-link" to={"/Home"}>
                Home
              </Link>
            </li>

            <li
              class="nav-item  ps-5 pe-5 text-light rounded"
              style={{ backgroundColor: "#3943b3" }}
            >
              <Link class="nav-link" to={"/About"}>
                About us
              </Link>
            </li>

            <li
              class="nav-item  ps-5 pe-5 text-light rounded"
              style={{ backgroundColor: "#3943b3" }}
            >
              <Link class="nav-link" to={"/Services"}>
                Services
              </Link>
            </li>
            <li
              class="nav-item  ps-5 pe-5 text-light rounded"
              style={{ backgroundColor: "#3943b3" }}
            >
              <Link class="nav-link" to={"/Product"}>
                Products
              </Link>
            </li>
            <li
              class="nav-item  ps-5 pe-5 text-light rounded"
              style={{ backgroundColor: "#3943b3" }}
            >
              <Link class="nav-link" to={"/Contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {opennavsmall ? (
        <>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light  position-absolute pt-2 pb-2  d-md-none d-block
  "
            style={{
              top: "0px",
              left: "0px",
              right: "0px",
              zIndex: 3,
              transform: "scaleY(0)",
              transformOrigin: "0 0",
              animation: opennavsmall ? `${mountedStyle}` : `${unmountedStyle}`,
            }}
          >
            <div
              className="collapse d-flex flex-column navbar-collapse justify-content-center "
              id="navbarSupportedContent"
            >
              <i
                class="fa-solid fa-xmark align-self-end pe-4 fs-5"
                onClick={smallnav}
              ></i>
              <ul className="navbar-nav flex-column  ps-2 pe-2 pt-2 pb-2">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Home"}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/About"}>
                    About us
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to={"/Services"}>
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/Product"}>
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/Contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
};

export default Index;
