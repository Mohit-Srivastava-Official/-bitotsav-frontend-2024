import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css/navigation";

export default function App() {
  const initialSlideIndex = 1;

  return (
    <div className="dotted-bg slider mx-auto mt-12">
      {" "}
      <h1 className="custom-heading-artist text-6xl text-center pb-4">
        {" "}
        THIS YEAR'S ARTISTS
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        initialSlide={initialSlideIndex}
        style={{
          "--swiper-pagination-color": "purple",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          backgroundColor: "transparent",
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid grid-cols-2 relative h-full">
            <img className="rounded-3xl" src="assets/Image1.png" alt="" />
            <div className="text-white absolute inset-0 flex items-center justify-center">
              <h1 className="font-blender-regular text-4xl text-center">
                Pineapple Express
              </h1>
            </div>
            <div className="text-white absolute bottom-0 left-0 p-4">
              <h1 className="font-blender-regular text-purple-700 text-2xl text-center">
                Day 1{" "}
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid grid-cols-2 relative h-full">
            <img className="rounded-3xl" src="assets/monali.jpeg" alt="" />
            <div className="text-white absolute inset-0 flex items-center justify-center">
              <h1 className="font-blender-regular text-4xl text-center sm">
                Monali Thakur
              </h1>
            </div>
            <div className="text-white absolute bottom-0 left-0 p-4">
              <h1 className="font-blender-regular text-2xl text-center">
                Day 3{" "}
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid grid-cols-2 relative bg-transparent">
            <img
              className="rounded-3xl h-full"
              src="assets/Image2.png"
              alt=""
            />
            <div className="text-white absolute inset-0 flex items-center justify-center">
              <h1 className="font-blender-regular text-4xl text-center">MJ5</h1>
            </div>
            <div className="text-white absolute bottom-0 left-0 p-4">
              <h1 className="font-blender-regular text-2xl text-center">
                Day 2{" "}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
