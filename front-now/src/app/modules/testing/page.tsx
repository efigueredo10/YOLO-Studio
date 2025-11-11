'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';
import { BarChart, LineChart, PlayCircle, Square, PauseCircle } from 'lucide-react';
import { TestingBarChart, TestingLineChart } from '@/app/modules/testing/components/testing-charts';
import { models, sources } from '@/lib/data';
import { motion } from 'framer-motion';

export default function TestingPage() {
    const detections = [
        { class: 'car', confidence: 0.98, bbox: '320, 410, 380, 470' },
        { class: 'car', confidence: 0.95, bbox: '500, 420, 550, 480' },
        { class: 'person', confidence: 0.88, bbox: '400, 510, 430, 580' },
    ]
  return (
    <div className="flex flex-1 flex-col h-full">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
        <h1 className="flex-1 text-lg font-semibold md:text-xl">Test a Model</h1>
        <div className="flex items-center gap-4">
            <Select defaultValue="1">
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                    {models.map(m => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}
                </SelectContent>
            </Select>
            <Select defaultValue="src-1">
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a source" />
                </SelectTrigger>
                <SelectContent>
                     {sources.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                </SelectContent>
            </Select>
            <Button><PlayCircle className="mr-2 h-4 w-4"/> Start Test</Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-3/5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="relative aspect-video flex items-center justify-center bg-secondary">
                <PlayCircle className="h-16 w-16 text-muted-foreground/50" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                    <Button variant="secondary" size="icon"><PauseCircle className="h-5 w-5"/></Button>
                    <Button variant="destructive" size="icon"><Square className="h-5 w-5"/></Button>
                </div>
            </Card>
          </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5 text-primary"/> Object Count by Class</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px] w-full">
                        <TestingBarChart />
                    </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><LineChart className="h-5 w-5 text-primary"/> FPS Over Time</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px] w-full">
                        <TestingLineChart />
                    </CardContent>
                </Card>
              </motion.div>
            </div>
        </div>
        <div className="flex flex-col gap-6 lg:w-2/5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card>
                  <CardHeader>
                      <CardTitle>Real-time Detections</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>Class</TableHead>
                                  <TableHead>Confidence</TableHead>
                                  <TableHead>BBox</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                            {detections.map((d, i) => (
                              <TableRow key={i}>
                                  <TableCell>{d.class}</TableCell>
                                  <TableCell>{d.confidence}</TableCell>
                                  <TableCell className="font-code text-xs">{d.bbox}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card>
                  <CardHeader>
                      <CardTitle>Session Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Average FPS:</span> <span className="font-semibold">29.5</span></div>
                      <div className="flex justify-between"><span>Average Latency:</span> <span className="font-semibold">34 ms</span></div>
                      <div className="flex justify-between"><span>Total Detections:</span> <span className="font-semibold">1,284</span></div>
                      <div className="flex justify-between"><span>Unique Objects:</span> <span className="font-semibold">15</span></div>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
             <Card>
                <CardHeader>
                    <CardTitle>Confidence Threshold</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <span className="font-semibold w-12 text-center">50%</span>
                    </div>
                </CardContent>
            </Card>
            </motion.div>
        </div>
      </main>
    </div>
  );
}
