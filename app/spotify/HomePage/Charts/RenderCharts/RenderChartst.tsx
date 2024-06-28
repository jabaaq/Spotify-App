import style from "../Charts.module.scss";
import cn from "classnames";
import ChartCard from "../ChartCard/ChartCard";
import { Track } from "@/service/serviceInterfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const renderSwiperCharts = (data: any) => {
  return (
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
        {data &&
          data.map((item: Track) => (
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
  );
};

const renderCharts = (data: any) => {
  return (
    <div className={cn(style.chartCards)}>
      {data &&
        data.map((item: Track) => (
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
  );
};

export { renderSwiperCharts, renderCharts };
