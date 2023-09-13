import React from "react";
import Header from "../Components/Header";
import SingkeImageSlider from "../Components/SingkeImageSlider";
import Footer from "../Components/Footer";
import Ourproduct from "../Components/Ourproduct";
import ProductImage from "../Images/productbackgroundImage.jpeg";

const Product = () => {
  return (
    <>
      <Header />
      <SingkeImageSlider
        Banner={ProductImage}
        content={"Products"}
        backgroundcolor={"rgb(39 43 44)"}
        blendmode={"overlay"}
        height={"250px"}
        color={"text-light"}
      />
      <Ourproduct />
      <Footer />
    </>
  );
};

export default Product;
