import style from "./HeroSection.module.scss";
import cn from "classnames";
import testImg from "../../../../testImages/heroSection.jpeg";
import HeroSectionCard from "./HeroSectionCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HeroSection = (): JSX.Element => {
  return (
    // <HeroSectionCard />
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroSectionCard />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSectionCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
