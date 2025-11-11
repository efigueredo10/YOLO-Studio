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
import { BrainCircuit, Download, Play, Trash2 } from 'lucide-react';
import { models } from '@/lib/data';
import { motion } from 'framer-motion';

export function ModelList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {models.map((model, index) => (
        <motion.div
          key={model.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="flex h-full flex-col overflow-hidden">
            <CardHeader className="relative bg-muted/30 p-4">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-lg font-bold">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    {model.name}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs">
                    Created: {new Date(model.created_at).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge
                  variant={model.type === 'custom' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {model.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 p-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size:</span>
                <span className="font-semibold">
                  {(model.size / 1000000).toFixed(1)} MB
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground">Classes:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {model.classes.slice(0, 4).map((cls) => (
                    <Badge key={cls} variant="secondary" className="font-mono text-xs">
                      {cls}
                    </Badge>
                  ))}
                  {model.classes.length > 4 && (
                     <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        + {model.classes.length - 4} more
                      </Button>
                  )}
                </div>
              </div>
              {model.metrics && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">mAP50-95:</span>
                  <span className="font-semibold">
                    {model.metrics.mAP50_95}
                  </span>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between gap-2 border-t p-4">
              <Button variant="outline" size="sm">
                <Play className="mr-2 h-4 w-4" /> Test
              </Button>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
