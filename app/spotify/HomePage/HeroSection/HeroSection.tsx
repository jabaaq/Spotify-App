"use client";
import HeroSectionCard from "./HeroSectionCard";
import "./swiper.scss";
import { useSelector } from "react-redux";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { Playlist } from "@/service/serviceInterfaces";

const HeroSection = (): JSX.Element => {
  const { userInformation } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return <HeroSectionCard name={userInformation.name} />;
};

export default HeroSection;

{
  /* // <Swiper
    //   pagination={true}
    //   modules={[Pagination]}
    //   slidesPerView={1}
    //   spaceBetween={30}
    //   className="heroSwiper"
    // >
    //   {fetchedPlaylist.map((item: Playlist) => (
    //     <SwiperSlide key={item.id}>
    //       <HeroSectionCard
    //         name={item.name}
    //         image={item.image}
    //         description={item.description}
    //         id={item.id}
    //       />
    //     </SwiperSlide>
    //   ))}
    // </Swiper> */
}
