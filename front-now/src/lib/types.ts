export interface Training {
  id: string;
  dataset_name: string;
  base_model: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  epochs: number;
  current_epoch: number;
  metrics: {
    loss: number;
    mAP50: number;
    mAP50_95: number;
    precision: number;
    recall: number;
  };
  created_at: string;
  completed_at?: string;
  model_path?: string;
}

export interface Model {
  id: string;
  name: string;
  type: 'pretrained' | 'custom';
  version: string;
  size: number;
  classes: string[];
  metrics?: {
    mAP50: number;
    mAP50_95: number;
  };
  created_at: string;
  file_path: string;
}

export interface Detection {
  class: string;
  confidence: number;
  bbox: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

export interface FrameResult {
  frame_id: number;
  timestamp: number;
  detections: Detection[];
  fps: number;
  latency: number;
}

export interface Source {
  id: string;
  name: string;
  type: 'rtsp' | 'webcam' | 'upload';
  connection_string?: string;
  file_path?: string;
  status: 'online' | 'offline' | 'testing';
  last_tested?: string;
  created_at: string;
}
