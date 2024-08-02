"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface props {
  data: {
    date: string;
    revenue: number;
  }[];
}
export  function Chart({ data }: props) {
  return (
    <ResponsiveContainer aspect={2}>
      <LineChart data={data.reverse()}>
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dataKey="revenue"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
