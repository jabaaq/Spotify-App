import style from "./SectionBuilder.module.scss";
import cn from "classnames";
import SectionCard from "../SectionCard/SectionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SectionBuilder = () => {
  return (
    <div className={cn(style.section_builder)}>
      <h2 className={cn(style.section_header)}>Section Name.</h2>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          500: {
            slidesPerView: 2.5,
          },
          750: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
          1600: {
            slidesPerView: 8,
          },
          1900: {
            slidesPerView: 9,
          },
        }}
        spaceBetween={30}
        // freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        loop={true}
        // centeredSlidesBounds={true}
      >
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <SectionCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionBuilder;
