'use client';

import {
  ArrowUp,
  Code,
  FileUp,
  ImageIcon,
  Wand2,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const suggestions = [
    {
      icon: Wand2,
      title: 'Train a new model',
      description: 'to detect objects in my factory.',
      href: '/modules/training',
    },
    {
      icon: Code,
      title: 'Write code to test',
      description: 'a model on a live webcam feed.',
      href: '/modules/testing',
    },
    {
      icon: ImageIcon,
      title: 'Analyze an image',
      description: 'and identify all the cars in it.',
      href: '/modules/testing',
    },
    {
      icon: FileUp,
      title: 'Upload a video file',
      description: 'and track objects frame-by-frame.',
      href: '/modules/sources',
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <MainNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-full flex-col justify-center">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 pb-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-br from-primary/90 via-primary to-primary/70 bg-clip-text text-transparent">
                Hello, I'm YOLO Vision
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Your AI-powered assistant for all things computer vision.
              </p>
            </div>

            <div className="grid w-full gap-4 md:grid-cols-4">
              {suggestions.map((s, i) => (
                <Card
                  key={i}
                  className="group cursor-pointer transition-all hover:border-primary/50 hover:bg-muted/30"
                  onClick={() => router.push(s.href)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base font-semibold">
                          {s.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {s.description}
                        </CardDescription>
                      </div>
                      <s.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="relative w-full">
              <Input
                placeholder="Ask me to train, test, or analyze anything..."
                className="h-14 rounded-full border-2 pr-16 text-base"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
              >
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              YOLO Vision may display inaccurate info, including about people, so
              double-check its responses.
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
