import {
  ResponsiveContainer,
  AreaChart as AreaChartComponent,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { CustomizedLabel } from "../CustomizedLabel";

export const AreaChart = ({ stockData }) => {
  const lastPrice = stockData.slice(-1)[0]["Open"];

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    const formattedDate = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return formattedDate === 1 ? month : formattedDate;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChartComponent
        width={500}
        height={200}
        data={stockData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A2BFDD" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#A2BFDD" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="Date" tickFormatter={formatXAxis} />
        <YAxis orientation="right" includeHidden />
        <Tooltip />
        <ReferenceLine
          y={lastPrice}
          stroke="green"
          strokeDasharray="3 3"
          label={<CustomizedLabel title={lastPrice} />}
        />
        <Area
          type="monotone"
          dataKey="Open"
          stroke="#8884d8"
          fill="url(#colorValue)"
        />
      </AreaChartComponent>
    </ResponsiveContainer>
  );
};
export default AreaChart;
