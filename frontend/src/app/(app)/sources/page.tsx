import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database } from 'lucide-react';

export default function SourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Video Sources"
        description="Add and manage your video sources for testing."
      />
       <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" />
            <CardTitle>Source Management Under Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The video source management system is being developed. This section will allow you to add and configure RTSP camera streams,
            manage video uploads, and test source connectivity before using them in the testing module.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
