import React, { useState } from "react";
import image1 from "../Images/mibs1.jpeg";
import image2 from "../Images/mibs2.jpeg";
import image3 from "../Images/mibs3.jpeg";
import image4 from "../Images/mibs4.jpeg";
import image5 from "../Images/mibs5.jpeg";
import image6 from "../Images/mibs6.jpeg";
import image7 from "../Images/mibs7.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Banner.css";
const Banner = () => {
  const [Slider] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        }}
        scrollbar={{ draggable: true }}
        className="swiperbanner"
      >
        {Slider.map((element) => (
          <>
            <SwiperSlide
              style={{
                height: "100%",
                backgroundImage: `url(${element})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundColor: "#3d3d3d",
                backgroundBlendMode: "overlay",
              }}
            ></SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
