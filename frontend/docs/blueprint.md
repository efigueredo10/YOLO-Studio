# **App Name**: YOLO Vision

## Core Features:

- Dataset Upload and Management: Enable users to upload and manage their datasets in YOLO format, including ZIP file support.
- Model Training: Provide a visual interface to configure training hyperparameters (epochs, batch size, learning rate) and train custom YOLO models based on user-uploaded datasets and pre-trained models. Show the parameters, the status, and make a downloadable model available at completion.
- Real-time Training Progress Visualization: Display real-time training progress with visualizations of current epoch, loss, mAP, and training evolution graphs.
- Model Testing on Video Sources: Allow users to test their trained models on various video sources (webcam, video upload, RTSP) and visualize real-time detections with bounding boxes. Output FPS, average latency and other test statistics. Consider exposing confidence threshold to the user.
- Video Source Management: Implement a system to add, test, and manage different video sources (RTSP cameras, webcams, video uploads) with preview capabilities.

## Style Guidelines:

- Primary color: Red (#DC2626) for main actions and active states.
- Background color: Almost black (#0a0a0a) for a dark theme.
- Accent color: Amber (#FBFF24) for secondary actions and highlights.
- Body and headline font: 'Inter' (sans-serif) for a modern, clean interface. The numbers in training readouts, the computer code, and log messages will also use 'Inter'.
- Use clear, modern icons to represent different actions and sources.
- Smooth transitions and loading states for a polished user experience.
- Modern and minimalist design with a focus on data visualization.