'use client';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { testingBarChartData, testingLineChartData } from '@/lib/data';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const barChartConfig = {
  count: {
    label: 'Count',
    color: 'hsl(var(--primary))',
  },
};

const lineChartConfig = {
    FPS: {
      label: 'FPS',
      color: 'hsl(var(--primary))',
    },
  };

export function TestingBarChart() {
  return (
    <ChartContainer config={barChartConfig} className="h-full w-full">
      <BarChart data={testingBarChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="class"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          fontSize={12}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function TestingLineChart() {
    return (
      <ChartContainer config={lineChartConfig} className="h-full w-full">
        <LineChart data={testingLineChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="FPS"
            type="monotone"
            stroke="var(--color-FPS)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    );
  }
