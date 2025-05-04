import React from 'react';
import { Layers, Cpu, BarChart3, Clock, Gauge } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PageTransition from '../components/PageTransition';

const Methodology: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Model & Methodology"
            subtitle="Understanding our approach to traffic detection using YOLOv8s"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* YOLOv8s model overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                YOLOv8s Model
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                YOLOv8 (You Only Look Once) is a state-of-the-art object detection model developed by Ultralytics. 
                We specifically chose the YOLOv8s variant (small) for our traffic detection system. YOLOv8s 
                offers an excellent balance between detection speed and accuracy, making it ideal for real-time 
                traffic monitoring applications.
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4 mb-6 italic text-gray-600 dark:text-gray-400">
                "YOLOv8 introduces significant architectural improvements over previous YOLO versions, 
                including a more efficient backbone, a better neck, and an enhanced head, resulting in better 
                performance across various benchmarks."
              </div>
              
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Why YOLOv8s?</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We carefully evaluated several YOLOv8 variants (nano, small, medium, large) for our specific use case:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Model</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Parameters</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Inference Speed</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">mAP Score</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">YOLOv8n</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">3.2M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Fastest</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">37.3%</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-900/20">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700 dark:text-blue-400">YOLOv8s</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">11.2M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Fast</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">44.9%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">YOLOv8m</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">25.9M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Moderate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">50.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                YOLOv8s provided the optimal trade-off between detection accuracy and inference speed for our application:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-base font-medium text-gray-900 dark:text-white">Better than YOLOv8n</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Significantly higher accuracy (7.6% better mAP) while still maintaining adequate speed for real-time processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-base font-medium text-gray-900 dark:text-white">More efficient than YOLOv8m</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Requires less computational resources while only sacrificing 5.3% in mAP, making it more suitable for deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Training methodology */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Training Methodology
              </h3>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Layers className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">Training Process</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implemented a comprehensive training strategy to ensure optimal model performance:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Dataset split: 80% training, 10% validation, 10% testing</li>
                  <li>Training epochs: 100 with early stopping based on validation loss</li>
                  <li>Batch size: 16</li>
                  <li>Optimizer: AdamW with an initial learning rate of 0.001</li>
                  <li>Learning rate scheduling: Cosine decay with warmup</li>
                  <li>Data augmentation: Random scaling, rotation, flipping, and mosaic</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">Hyperparameter Tuning</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We conducted extensive hyperparameter tuning to optimize model performance for our specific dataset:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                
                  <li>IoU threshold: Optimized for our specific vehicle classes</li>
                  
                  <li>Confidence threshold: Tuned to balance precision and recall</li>
                </ul>
              </div>
            </div>
            
            {/* Implementation details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Implementation Details
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our system is implemented using PyTorch and the Ultralytics YOLOv8 framework. We deployed the 
                trained model on a system with the following specifications:
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Hardware Configuration</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>CPU: Intel Core i5 10400</li>
                  <li>GPU: NVIDIA GTX 1060 (3GB VRAM)</li>
                  <li>RAM: 16 GB DDR4</li>
                  <li>Storage: 256 GB NVMe SSD</li>
                </ul>
              </div>
              
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Inference Performance</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                With our optimized YOLOv8s model, we achieve real-time processing at 30+ FPS on 1080p video 
                streams, enabling practical deployment in real-world traffic monitoring scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Methodology;