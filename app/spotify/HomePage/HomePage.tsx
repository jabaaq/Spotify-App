import style from "./HomePage.module.scss";
import cn from "classnames";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";
import SectionBuilder from "@/component/SectionBuilder/SectionBuilder";

const HomePage = () => {
  return (
    <div className={cn(style.homepage)}>
      <div className={cn(style.homePage_container)}>
        <HeroSection />
        <Charts />
      </div>
      <div className={cn(style.section_container)}>
        <SectionBuilder />
        <SectionBuilder />
      </div>
    </div>
  );
};

export default HomePage;
