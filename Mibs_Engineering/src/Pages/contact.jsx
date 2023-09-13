import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingkeImageSlider from "../Components/SingkeImageSlider";
import contactbanner from "../Images/contactbanner.jpg";
const Contact = () => {
  const [contact] = useState([
    {
      content: "509-CB,Lane No.05,Gulistan Colony Rawalpindi Pakistan",
      icon: "fa-solid fa-location-dot",
    },
    {
      content: "+92 (51) 889 66 83",
      newcontent: " +92 (300) 111 4326",
      icon: "fa-solid fa-phone",
    },
    {
      content: "info@mibs.com.pk",
      icon: "fa-regular fa-envelope",
    },
  ]);
  return (
    <>
      <Header />
      <SingkeImageSlider
        Banner={contactbanner}
        content={"Contact us"}
        height={"400px"}
        backgroundcolor={"rgb(177 176 175)"}
        blendmode={"overlay"}
        contact={contact}
        color={"text-dark"}
      />
      <Footer />
    </>
  );
};

export default Contact;
