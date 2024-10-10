import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../about.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_2 from "../assets/img/demo/23.png";
import slide_image_1 from "../assets/img/demo/24.png";
import slide_image_3 from "../assets/img/demo/25.png";
import slide_image_4 from "../assets/img/demo/26.png";
import slide_image_5 from "../assets/img/demo/27.png";
import slide_image_6 from "../assets/img/demo/28.png";
import slide_image_7 from "../assets/img/demo/29.png";

import arrowright from "../assets/img/arrowright.png";
import arrowleft from "../assets/img/arrowleft.png";

export const About = () => {
  return (
    <section className="about">
      <Container>
        <h2>About Me</h2>
        <p>“An explorer brings curiosity to immerse in a creative world” </p>
      </Container>
      <div className="swipeContainer" id="about">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <img src={arrowleft} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src={arrowright} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
