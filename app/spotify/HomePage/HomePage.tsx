import style from "./HomePage.module.scss";
import cn from "classnames";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";
import SectionBuilder from "@/component/SectionBuilder/SectionBuilder";
import { useRef } from "react";

const HomePage = () => {
  const myRef = useRef<null | HTMLDivElement>(null);

  const scrollTo = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cn(style.homepage)}>
      <div className={cn(style.homePage_container)}>
        <div className={cn(style.swiper)}>
          <HeroSection scrollTo={scrollTo} />
        </div>
        <Charts />
      </div>
      <div ref={myRef} className={cn(style.section_container)}>
        <SectionBuilder />
        <SectionBuilder />
      </div>
    </div>
  );
};

export default HomePage;
