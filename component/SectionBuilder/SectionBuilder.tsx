"use client";
import style from "./SectionBuilder.module.scss";
import cn from "classnames";
import SectionCard from "../SectionCard/SectionCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { NewReleases } from "@/service/serviceInterfaces";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SectionBuilder = (): JSX.Element => {
  const { section, fetchedNewReleases } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
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
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        freeMode={true}
      >
        {fetchedNewReleases[1] &&
          fetchedNewReleases[1].map((item: NewReleases, i: number) => (
            <SwiperSlide key={item.id}>
              <SectionCard
                key={item.id}
                artist={item.artist}
                image={item.image}
                name={item.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SectionBuilder;
