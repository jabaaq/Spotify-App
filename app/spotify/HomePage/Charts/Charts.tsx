"use client";
import style from "./Charts.module.scss";
import cn from "classnames";
import ChartCard from "./ChartCard/ChartCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Track } from "@/service/serviceInterfaces";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Charts = () => {
  const { screenY } = useSize();
  const { fetchedTopTracks } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <div className={cn(style.chart_container)}>
      <h1>Top Charts</h1>
      {screenY > 720 ? (
        <div className={cn(style.chartCards)}>
          {fetchedTopTracks.map((item: Track) => (
            <ChartCard
              key={item.key}
              title={item.title}
              id={item.id}
              image={item.image}
              artist={item.artist}
              duration={item.duration}
              preview_url={item.preview_url}
              spotify_url={item.spotify_url}
            />
          ))}
        </div>
      ) : (
        <div className={cn(style.swiper)}>
          <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1.2,
              },
              560: {
                slidesPerView: 1.7,
              },
            }}
            spaceBetween={40}
            cssMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {fetchedTopTracks.map((item: Track) => (
              <SwiperSlide key={item.key}>
                <ChartCard
                  key={item.key}
                  title={item.title}
                  id={item.id}
                  image={item.image}
                  artist={item.artist}
                  duration={item.duration}
                  preview_url={item.preview_url}
                  spotify_url={item.spotify_url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Charts;
