'use client';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { trainingChartData } from '@/lib/data';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const chartConfig = {
  loss: {
    label: 'Loss',
    color: 'hsl(var(--primary))',
  },
  mAP: {
    label: 'mAP',
    color: 'hsl(var(--secondary))',
  },
};

export function TrainingChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <LineChart data={trainingChartData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="epoch"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `E${value}`}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="loss"
          type="monotone"
          stroke="var(--color-loss)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="mAP"
          type="monotone"
          stroke="var(--color-mAP)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
