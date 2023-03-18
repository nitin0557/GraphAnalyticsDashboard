import React from "react";
import {
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

function ChartArea({ pdata }) {
  return (
    <>
      <ResponsiveContainer width="125%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: -55,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          {/* ?\<Tooltip /> */}
          <Area
            type="monotone"
            dataKey="student"
            stroke="#00b6ff"
            fill="#00b6ff"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default ChartArea;
