import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logoHeader.jpeg";
import Aos from "aos";
import "./Header.css";

const Header = () => {
  const [opennavsmall, updatenavsmall] = useState(false);
  const smallnav = () => {
    if (opennavsmall) {
      updatenavsmall(false);
    } else {
      updatenavsmall(true);
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);

  const mountedStyle = "inAnimation 0.5s ease-in forwards";
  const unmountedStyle = "outAnimation 1s ease-out forwards";

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="logo_and_nav_mobile d-flex align-items-center gap-3   pt-1 pb-1">
            <div
              className="logo ps-2 pe-2"
              data-aos="fade-right"
              data-aos-offset="600"
              data-aos-easing="ease-in-sine"
            >
              <Link to={"/"}>
                <img className="logoimage" src={Logo} alt="" srcset="" />
              </Link>
            </div>

            <div className="nav_Desktop d-lg-block d-none flex-grow-1">
              <ul className="navbar-nav  flex-row gap-5 justify-content-end ps-3 pe-3   text-uppercase fw-bold">
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li
                  class="nav-item"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Link class="nav-link" to={"/About"}>
                    About us
                  </Link>
                </li>
                <li
                  class="nav-item "
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <Link class="nav-link" to={"/Services"}>
                    Services
                  </Link>
                </li>
                <li
                  class="nav-item"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Link class="nav-link" to={"/Product"}>
                    Products
                  </Link>
                </li>
                <li
                  class="nav-item"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <Link class="nav-link" to={"/Contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-grow-1 d-flex justify-content-end pe-2 ps-2 d-lg-none ">
              <i class="fa-solid fa-list fs-4" onClick={smallnav}></i>
            </div>
          </div>

          {opennavsmall ? (
            <>
              <nav
                className="navbar navbar-expand-lg navbar-light bg-light  position-absolute pt-2 pb-2  d-lg-none d-block
  "
                style={{
                  top: "0px",
                  left: "0px",
                  right: "0px",
                  zIndex: 3,
                  transform: "scaleY(0)",
                  transformOrigin: "0 0",
                  animation: opennavsmall
                    ? `${mountedStyle}`
                    : `${unmountedStyle}`,
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
                      <Link className="nav-link" to={"/"}>
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
      </div>
    </>
  );
};

export default Header;
