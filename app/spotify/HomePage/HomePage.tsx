import style from "./HomePage.module.scss";
import cn from "classnames";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";

const HomePage = () => {
  return (
    <div className={cn(style.homepage)}>
      <div className={cn(style.homePage_container)}>
        <HeroSection />
        <Charts />
      </div>
    </div>
  );
};

export default HomePage;
