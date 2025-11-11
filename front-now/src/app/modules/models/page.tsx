'use client';

import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { ModelList } from './components/model-list';

export default function ModelsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="p-4 md:p-6">
        <PageHeader
          title="Model Library"
          description="Browse, manage, and test your trained and pre-trained models."
        >
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Model
          </Button>
        </PageHeader>
      </div>
      <div className="p-4 pt-0 md:p-6 md:pt-0">
        <ModelList />
      </div>
    </div>
  );
}
