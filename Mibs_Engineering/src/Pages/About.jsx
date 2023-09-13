import React from "react";
import Header from "../Components/Header";
import SingkeImageSlider from "../Components/SingkeImageSlider";
import Footer from "../Components/Footer";
import Aboutus from "../Components/About_us";
// import AboutBanner from "../Images/Aboutbanner.jpg";

const About = () => {
  return (
    <>
      <Header />
      <SingkeImageSlider
        // Banner={AboutBanner}
        // content={"About"}
        // backgroundcolor={"#7c5d45"}
        // blendmode={"overlay"}
        // height={"250px"}
        // color={"text-light"}
      />
      <Aboutus />
      <Footer />
    </>
  );
};

export default About;
