import React from "react";
import Header from "../Components/Header";
import SingkeImageSlider from "../Components/SingkeImageSlider";
import Footer from "../Components/Footer";
import ServicesComponent from "../Components/Services";
import ServicesBanner from "../Images/servicesbanner.jpg";
const Services = () => {
  return (
    <>
      <Header />
      <SingkeImageSlider
        Banner={ServicesBanner}
        content={"Mibs Services"}
        backgroundcolor={"#6e3e3e"}
        blendmode={"overlay"}
        height={"250px"}
        color={"text-light"}
      />
      <ServicesComponent />
      <Footer />
    </>
  );
};

export default Services;
