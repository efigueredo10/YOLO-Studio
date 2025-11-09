import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaySquare } from 'lucide-react';

export default function TestingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Model Testing"
        description="Test models on different video sources with real-time visualization."
      />
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <PlaySquare className="w-8 h-8 text-primary" />
            <CardTitle>Testing Interface Under Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The interface for testing models is currently being built. Soon, you'll be able to select a model,
            choose a video source (webcam, upload, RTSP), and see real-time detections with bounding boxes and performance statistics.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
