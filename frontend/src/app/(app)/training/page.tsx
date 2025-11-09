import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Model Training"
        description="Upload datasets, configure hyperparameters, and train custom YOLO models."
      />
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <CardTitle>Training Interface Under Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The visual interface for training custom YOLO models is coming soon. You will be able to upload your dataset,
            select a base model, configure parameters like epochs and batch size, and monitor the training progress in real-time.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
