'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  CheckCircle,
  Goal,
  RefreshCw,
  Target,
  UploadCloud,
} from 'lucide-react';
import { TrainingChart } from '@/app/modules/training/components/training-chart';
import { PageHeader } from '@/components/shared/page-header';
import { motion } from 'framer-motion';

export default function TrainingPage() {
  const finalMetrics = [
    {
      name: 'Precision',
      value: '0.92',
      icon: Target,
    },
    {
      name: 'Recall',
      value: '0.89',
      icon: RefreshCw,
    },
    {
      name: 'mAP50',
      value: '0.95',
      icon: Goal,
    },
    {
      name: 'mAP50-95',
      value: '0.78',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="p-4 md:p-6">
        <PageHeader
          title="Train a New Model"
          description="Upload a dataset, configure parameters, and track training progress in real-time."
        >
          <Button>Start Training</Button>
        </PageHeader>
      </div>

      <div className="grid gap-6 p-4 pt-0 md:p-6 md:pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {finalMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.name}
                  </CardTitle>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Dataset</CardTitle>
                  <CardDescription>
                    Upload your dataset in YOLO format (.zip).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 p-12 text-center">
                    <UploadCloud className="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="text-lg font-semibold">
                      Drag & drop your dataset
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      or click to browse files
                    </p>
                    <Button variant="outline" className="mt-4">
                      Browse Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex-1"
            >
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>Training Progress</CardTitle>
                  <CardDescription>Loss over time per epoch.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] w-full">
                  <TrainingChart />
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                  <CardDescription>
                    Set the hyperparameters for your training session.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="base-model">Base Model</Label>
                    <Select defaultValue="yolov8n">
                      <SelectTrigger id="base-model">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yolov8n">YOLOv8n</SelectItem>
                        <SelectItem value="yolov8s">YOLOv8s</SelectItem>
                        <SelectItem value="yolov8m">YOLOv8m</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="epochs">Epochs</Label>
                    <Input id="epochs" type="number" defaultValue={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batch-size">Batch Size</Label>
                    <Input id="batch-size" type="number" defaultValue={16} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="img-size">Image Size (px)</Label>
                    <Input id="img-size" type="number" defaultValue={640} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="learning-rate">Learning Rate</Label>
                    <Input
                      id="learning-rate"
                      type="text"
                      defaultValue="0.001"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Reset to Defaults
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle>Training Logs</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-full max-h-[260px] rounded-md border p-2">
                <pre className="font-code text-xs">
                  <code>
                    [2025-11-20 10:30:00] Training session started.
                    <br />
                    [2025-11-20 10:30:01] Epoch 1/100...
                    <br />
                    [2025-11-20 10:30:15] Loss: 0.89, mAP: 0.12
                    <br />
                    [2025-11-20 10:30:16] Epoch 2/100...
                    <br />
                    [2025-11-20 10:30:30] Loss: 0.75, mAP: 0.25
                    <br />
                    [2025-11-20 10:30:31] Checkpoint saved.
                    <br />
                    [2025-11-20 10:30:32] Epoch 3/100...
                  </code>
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
