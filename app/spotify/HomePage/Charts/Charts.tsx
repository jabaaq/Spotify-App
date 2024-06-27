import style from "./Charts.module.scss";
import cn from "classnames";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";
import { renderCharts, renderSwiperCharts } from "./RenderCharts/RenderChartst";

const Charts = () => {
  const { screenY } = useSize();
  return (
    <div className={cn(style.chart_container)}>
      <h1>Top Charts</h1>
      {screenY > 720 ? renderCharts() : renderSwiperCharts()}
    </div>
  );
};

export default Charts;
