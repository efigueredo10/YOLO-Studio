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
import { Badge } from '@/components/ui/badge';
import {
  FileVideo,
  Pencil,
  Play,
  PlusCircle,
  Rss,
  Trash2,
  Webcam,
} from 'lucide-react';
import { sources } from '@/lib/data';
import type { Source } from '@/lib/types';
import { PageHeader } from '@/components/shared/page-header';
import Image from 'next/image';
import { motion } from 'framer-motion';

const getSourceIcon = (type: Source['type']) => {
  switch (type) {
    case 'webcam':
      return <Webcam className="h-4 w-4" />;
    case 'rtsp':
      return <Rss className="h-4 w-4" />;
    case 'upload':
      return <FileVideo className="h-4 w-4" />;
  }
};

const getImageForSource = (source: Source) => {
  switch (source.type) {
    case 'webcam':
      return {
        url: `https://picsum.photos/seed/${source.id}/400/225`,
        hint: 'webcam view',
      };
    case 'rtsp':
      return {
        url: `https://picsum.photos/seed/${source.id}/400/225`,
        hint: 'security camera',
      };
    case 'upload':
      return {
        url: `https://picsum.photos/seed/${source.id}/400/225`,
        hint: 'video file',
      };
  }
};

export default function SourcesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="p-4 md:p-6">
        <PageHeader
          title="Video Sources"
          description="Manage your cameras, video files, and other sources for model testing."
        >
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Source
          </Button>
        </PageHeader>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 p-4 pt-0 md:p-6 md:pt-0">
        {sources.map((source, index) => {
          const imageData = getImageForSource(source);
          return (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={imageData.url}
                    alt={source.name}
                    fill
                    className="object-cover"
                    data-ai-hint={imageData.hint}
                  />
                </div>
                <CardHeader className="relative">
                  <Badge
                    variant={
                      source.status === 'online' ? 'default' : 'destructive'
                    }
                    className="absolute top-4 right-4 capitalize"
                  >
                    {source.status}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getSourceIcon(source.type)}
                    <span className="capitalize">{source.type}</span>
                  </div>
                  <CardTitle className="pr-20 text-lg font-semibold">
                    {source.name}
                  </CardTitle>
                  <CardDescription>
                    Created on {new Date(source.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm text-muted-foreground">
                  {source.connection_string && (
                    <p className="truncate">
                      <strong>URL:</strong> {source.connection_string}
                    </p>
                  )}
                  {source.file_path && (
                    <p className="truncate">
                      <strong>Path:</strong> {source.file_path}
                    </p>
                  )}
                  {source.last_tested && (
                    <p>
                      <strong>Last Test:</strong>{' '}
                      {new Date(source.last_tested).toLocaleString()}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" /> Test
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Pencil className="mr-2 h-4 w-4" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
