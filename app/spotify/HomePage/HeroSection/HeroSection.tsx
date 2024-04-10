import style from "./HeroSection.module.scss";
import cn from "classnames";
import testImg from "../../../../testImages/heroSection.jpeg";

const HeroSection = () => {
  return (
    <div className={cn(style.heroSection_container)}>
      <div className={cn(style.section_description)}>
        {/* A separate component must be created for this 2 tag ↓ */}
        <h2>Music Title</h2>{" "}
        <p>
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more
        </p>
      </div>
      <img src={testImg.src} alt="TESTIMG" />
    </div>
  );
};

export default HeroSection;
