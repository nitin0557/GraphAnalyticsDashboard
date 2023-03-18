import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ChartsLine({ pdata }) {
  return (
    <>
      <ResponsiveContainer className="chart-layout" width="112%" aspect={3}>
        <LineChart
          data={pdata}
          width={100}
          height={50}
          margin={{ top: 5, right: 30, left: -40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />

          <Line
            type="monotone"
            dataKey="student"
            stroke="#00b6ff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default ChartsLine;
