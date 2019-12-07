import React, { memo } from 'react';
import { LineChart, Line, XAxis } from 'recharts';

const data = [
  { name: '', uv: 15000 },
  { name: '', uv: 35000 },
  { name: '', uv: 30000 },
  { name: '', uv: 15000 },
  { name: '', uv: 30000 },
  { name: '', uv: 15000 },
  { name: '', uv: 30000 },
  { name: '', uv: 15000 },
  { name: '', uv: 30000 },
  { name: '', uv: 15000 },
  { name: '', uv: 30000 },
  { name: 'Дек', uv: 30000 },
];

const LinesChart = () => {
  return (
    <LineChart width={180} height={100} data={data}>
      <Line type="natural" dataKey="uv" stroke="#8884d8" dot={false} />
      <XAxis dataKey="name" tickSize={4} />
    </LineChart>
  );
};

export default memo(LinesChart);
