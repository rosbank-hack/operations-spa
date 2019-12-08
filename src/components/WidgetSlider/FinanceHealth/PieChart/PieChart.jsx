import React, { memo } from 'react';
import { PieChart, Pie } from 'recharts';

const data = [{ name: 'Group A', value: 73 }];

const PieChartApp = () => {
  return (
    <PieChart width={200} height={120}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={30}
        data={data}
        cx={100}
        cy={100}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
};

export default memo(PieChartApp);
