import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    bw: 4000,
    color: 2400,
  },
  {
    name: "Mon",
    bw: 3000,
    color: 1398,
  },
  {
    name: "Tue",
    bw: 2000,
    color: 9800,
  },
  {
    name: "Wed",
    bw: 2780,
    color: 3908,
  },
  {
    name: "Thu",
    bw: 1890,
    color: 4800,
  },
  {
    name: "Fri",
    bw: 2390,
    color: 3800,
  },
  {
    name: "Sat",
    bw: 3490,
    color: 4300,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="bw"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="color"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
