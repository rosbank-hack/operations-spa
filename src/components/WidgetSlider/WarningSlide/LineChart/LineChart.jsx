import React, { memo } from 'react';
import { LineChart, Line, XAxis } from 'recharts';

const data = [
  { name: '', uv: 250 },
  { name: '', uv: 350 },
  { name: '', uv: 30 },
  { name: '', uv: 250 },
  { name: '', uv: 300 },
  { name: '', uv: 250 },
  { name: '', uv: 300 },
  { name: '', uv: 250 },
  { name: '', uv: 300 },
  { name: '', uv: 250 },
  { name: '', uv: 300 },
  { name: 'Дек', uv: 300 },
];

const LinesChart = () => {
  return (
    <LineChart width={130} height={150} data={data}>
      <Line type="natural" dataKey="uv" stroke="#8884d8" dot={false} />
      <XAxis dataKey="name" tickSize={4} />
    </LineChart>
  );
};

export default memo(LinesChart);
