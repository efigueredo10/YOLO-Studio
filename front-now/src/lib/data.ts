import type { Model, Source } from '@/lib/types';

export const models: Model[] = [
  {
    id: '1',
    name: 'YOLOv8n-custom-1',
    type: 'custom',
    version: '1.0',
    size: 16200000,
    classes: ['car', 'person', 'truck'],
    metrics: { mAP50: 0.92, mAP50_95: 0.75 },
    created_at: '2025-11-19T14:00:00Z',
    file_path: '/models/yolov8n-custom-1.pt',
  },
  {
    id: '2',
    name: 'YOLOv8s (Pre-trained)',
    type: 'pretrained',
    version: '8.0',
    size: 22500000,
    classes: ['person', 'bicycle', 'car', '... 77 more'],
    created_at: '2025-01-01T00:00:00Z',
    file_path: '/models/yolov8s.pt',
  },
  {
    id: '3',
    name: 'Traffic-Model-v2',
    type: 'custom',
    version: '2.1',
    size: 34100000,
    classes: ['car', 'bus', 'traffic light', 'stop sign'],
    metrics: { mAP50: 0.88, mAP50_95: 0.68 },
    created_at: '2025-11-15T10:30:00Z',
    file_path: '/models/traffic-model-v2.pt',
  },
  {
    id: '4',
    name: 'YOLOv8m (Pre-trained)',
    type: 'pretrained',
    version: '8.0',
    size: 52900000,
    classes: ['person', 'bicycle', 'car', '... 77 more'],
    created_at: '2025-01-01T00:00:00Z',
    file_path: '/models/yolov8m.pt',
  },
];

export const sources: Source[] = [
  {
    id: 'src-1',
    name: 'Main Lobby Webcam',
    type: 'webcam',
    status: 'online',
    last_tested: '2025-11-20T10:00:00Z',
    created_at: '2025-11-10T09:00:00Z',
  },
  {
    id: 'src-2',
    name: 'Parking Lot Cam 1',
    type: 'rtsp',
    connection_string: 'rtsp://192.168.1.101/stream1',
    status: 'online',
    last_tested: '2025-11-20T10:05:00Z',
    created_at: '2025-11-11T11:00:00Z',
  },
  {
    id: 'src-3',
    name: 'Highway Traffic Footage',
    type: 'upload',
    file_path: '/videos/highway.mp4',
    status: 'online',
    created_at: '2025-11-12T15:00:00Z',
  },
  {
    id: 'src-4',
    name: 'Warehouse Entrance',
    type: 'rtsp',
    connection_string: 'rtsp://192.168.1.102/stream2',
    status: 'offline',
    last_tested: '2025-11-19T08:00:00Z',
    created_at: '2025-11-13T12:00:00Z',
  },
];

export const trainingChartData = [
  { epoch: 1, loss: 1.5, mAP: 0.1 },
  { epoch: 10, loss: 0.9, mAP: 0.3 },
  { epoch: 20, loss: 0.7, mAP: 0.5 },
  { epoch: 30, loss: 0.5, mAP: 0.65 },
  { epoch: 40, loss: 0.4, mAP: 0.75 },
  { epoch: 50, loss: 0.3, mAP: 0.82 },
  { epoch: 60, loss: 0.25, mAP: 0.86 },
  { epoch: 70, loss: 0.22, mAP: 0.88 },
  { epoch: 80, loss: 0.2, mAP: 0.9 },
  { epoch: 90, loss: 0.18, mAP: 0.91 },
  { epoch: 100, loss: 0.17, mAP: 0.92 },
];

export const testingBarChartData = [
    { class: 'car', count: 12 },
    { class: 'person', count: 5 },
    { class: 'bus', count: 2 },
    { class: 'truck', count: 1 },
];

export const testingLineChartData = [
    { time: '0s', FPS: 28 },
    { time: '5s', FPS: 30 },
    { time: '10s', FPS: 29 },
    { time: '15s', FPS: 27 },
    { time: '20s', FPS: 31 },
    { time: '25s', FPS: 30 },
    { time: '30s', FPS: 29 },
];
