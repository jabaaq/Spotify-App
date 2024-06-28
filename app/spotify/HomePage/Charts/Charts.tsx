import { useSelector } from "react-redux";
import style from "./Charts.module.scss";
import cn from "classnames";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";
import { renderCharts, renderSwiperCharts } from "./RenderCharts/RenderChartst";
import { RootState } from "@/app/store/store";

const Charts = () => {
  const { fetchedTopTracks } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  const { screenY } = useSize();
  return (
    <div className={cn(style.chart_container)}>
      <h1>Top Charts</h1>
      {screenY > 720
        ? renderCharts(fetchedTopTracks)
        : renderSwiperCharts(fetchedTopTracks)}
    </div>
  );
};

export default Charts;
