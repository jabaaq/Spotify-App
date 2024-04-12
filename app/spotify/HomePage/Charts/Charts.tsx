"use client";

import style from "./Charts.module.scss";
import cn from "classnames";
import ChartCard from "./ChartCard/ChartCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Charts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className={cn(style.chart_container)}>
      <h1>Top Charts</h1> {/* need to create the h component */}
      {windowWidth > 720 ? (
        <div className={cn(style.chartCards)}>
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
      ) : (
        <div className={cn(style.swiper)}>
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            loop={true}
            centeredSlidesBounds={true}
          >
            <SwiperSlide>
              <ChartCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChartCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChartCard />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Charts;
