import style from "./SectionBuilder.module.scss";
import cn from "classnames";
import SectionCard from "../SectionCard/SectionCard";
import { NewReleases } from "@/service/serviceInterfaces";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SectionBuilder = ({ sectionName, data }: any): JSX.Element => {
  return (
    <div className={cn(style.section_builder)}>
      <h2 className={cn(style.section_header)}>{sectionName}</h2>
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
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        freeMode={true}
      >
        {data &&
          data.map((item: NewReleases) => (
            <SwiperSlide key={item.id}>
              <SectionCard
                key={item.id}
                id={item.id}
                artist={item.artist}
                image={item.image}
                name={item.name}
                type={item.type}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SectionBuilder;
