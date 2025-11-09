import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BrainCircuit, Database, FolderKanban, PlaySquare, Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  imageId: string;
  icon: React.ElementType;
};

function FeatureCard({ title, description, href, imageId, icon: Icon }: FeatureCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === imageId);

  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        {placeholder && (
          <div className="aspect-video relative">
            <Image
              src={placeholder.imageUrl}
              alt={placeholder.description}
              fill
              className="object-cover"
              data-ai-hint={placeholder.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8 text-primary" />
          <CardTitle className="text-xl font-headline">{title}</CardTitle>
        </div>
        <CardDescription className="flex-grow">{description}</CardDescription>
        <CardFooter className="p-0 pt-6">
          <Button asChild variant="outline" className="w-full">
            <Link href={href}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default function DashboardPage() {
  const features: FeatureCardProps[] = [
    {
      title: 'Model Training',
      description: 'Upload your dataset, configure hyperparameters, and train a custom YOLO model from scratch or a pre-trained base.',
      href: '/training',
      imageId: 'model-training',
      icon: BrainCircuit,
    },
    {
      title: 'Model Testing',
      description: 'Test your trained models in real-time on various video sources like webcams, video files, or RTSP streams.',
      href: '/testing',
      imageId: 'model-testing',
      icon: PlaySquare,
    },
    {
      title: 'Video Sources',
      description: 'Manage your video sources. Add RTSP cameras, upload video files, and test connectivity before running your models.',
      href: '/sources',
      imageId: 'video-sources',
      icon: Database,
    },
    {
      title: 'Manage Models',
      description: 'Browse your custom-trained models and official pre-trained YOLO models. Download, inspect, or delete them.',
      href: '/models',
      imageId: 'dataset-management',
      icon: FolderKanban,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Welcome to YOLO Vision"
        description="Your all-in-one studio for training and testing computer vision models."
      >
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Dataset
        </Button>
      </PageHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
