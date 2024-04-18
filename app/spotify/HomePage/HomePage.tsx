import style from "./HomePage.module.scss";
import cn from "classnames";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";
import SectionBuilder from "@/component/SectionBuilder/SectionBuilder";
import { useRef } from "react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const myRef = useRef<null | HTMLDivElement>(null);

  const scrollTo = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { section } = useSelector((state: RootState) => state.spotifyReducer);

  // useEffect(() => {
  //   console.log(section);
  // }, [section]);

  return (
    <div className={cn(style.homepage)}>
      <div className={cn(style.homePage_container)}>
        <div className={cn(style.swiper)}>
          <HeroSection scrollTo={scrollTo} />
        </div>
        <Charts />
      </div>
      <div ref={myRef} className={cn(style.section_container)}>
        {section.map((section: any, i: number) => (
          <SectionBuilder key={i} sectionName={section[0]} data={section[1]} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
