import HeroSectionCard from "./HeroSectionCard";
import "./swiper.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Playlist } from "@/service/serviceInterfaces";

const HeroSection = ({ scrollTo }: Playlist): JSX.Element => {
  const { userInformation } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return <HeroSectionCard name={userInformation.name} scrollTo={scrollTo} />;
};

export default HeroSection;
