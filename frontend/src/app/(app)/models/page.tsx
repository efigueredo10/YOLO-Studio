import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Box } from 'lucide-react';

export default function ModelsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Models Library"
        description="Manage your custom-trained and pre-trained models."
      />
       <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Box className="w-8 h-8 text-primary" />
            <CardTitle>Models Library Under Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The model management interface is on its way. You will soon be able to browse a library of your trained models
            and standard YOLO pre-trained models, view their stats, and manage them.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
