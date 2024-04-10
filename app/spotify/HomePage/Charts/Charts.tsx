import style from "./Charts.module.scss";
import cn from "classnames";
import ChartCard from "./ChartCard/ChartCard";

const Charts = () => {
  return (
    <div className={cn(style.chart_container)}>
      <h1>Top Charts</h1> {/* need to create the h component */}
      <div className={style.chartCards}>
        <ChartCard />
        <ChartCard />
        <ChartCard />
      </div>
    </div>
  );
};

export default Charts;
