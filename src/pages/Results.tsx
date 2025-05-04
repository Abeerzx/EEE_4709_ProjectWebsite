import React from 'react';
import { PieChart, BarChart, LineChart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PageTransition from '../components/PageTransition';

const Results: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Results & Performance"
            subtitle="Detailed analysis of the model's detection accuracy and performance metrics"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Accuracy metrics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Detection Accuracy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our YOLOv8s model demonstrates excellent detection accuracy across various vehicle classes
                and operating conditions. The following metrics were calculated on our test dataset:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Overall mAP (IoU=0.5)</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">92.7%</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Precision</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">94.3%</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Recall</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">91.2%</p>
                </div>
              </div>
              
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Per-Class Performance</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The model's performance varies slightly across different vehicle classes:
              </p>
              
              <div className="mb-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2 text-sm">
                  <div className="w-24 md:w-32">Vehicle Class</div>
                  <div className="w-16 text-center">Precision</div>
                  <div className="w-16 text-center">Recall</div>
                  <div className="w-16 text-center">F1-Score</div>
                  <div className="flex-grow">AP</div>
                </div>
                
                {[
                  { class: 'Car', precision: 92.8, recall: 97.2, f1: 96.0, ap: 97.3 },
                  { class: 'Bus', precision: 89.7, recall: 91.1, f1: 94.9, ap: 96.5 },
                  { class: 'Truck', precision: 89.3, recall: 88.8, f1: 93.5, ap: 95.2 },
                  { class: 'Motorcycle', precision: 92.1, recall: 88.7, f1: 90.4, ap: 92.8 },
                  { class: 'CNG', precision: 93.5, recall: 89.3, f1: 91.3, ap: 94.1 }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center mb-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <div className="w-24 md:w-32 font-medium">{item.class}</div>
                    <div className="w-16 text-center">{item.precision}%</div>
                    <div className="w-16 text-center">{item.recall}%</div>
                    <div className="w-16 text-center">{item.f1}%</div>
                    <div className="flex-grow">
                      <div className="relative h-4 bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div 
                          className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-600 rounded-full" 
                          style={{ width: `${item.ap}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual results */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Visual Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Below are some visual examples of our model's detection capabilities on typical traffic scenarios in Dhaka:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  'https://imgur.com/a5CRGEp',
                  'https://imgur.com/1D6o6WC',
                  'https://imgur.com/sHhgynG',
                  'https://imgur.com/HJuZ6RG',
                ].map((src, i) => (
                  <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={`${src}.png`}
                      alt={`Detection Result ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Visualizing Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Visualizing Performance
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The following graphs represent the model’s training behavior and evaluation indicators. Each curve highlights a key aspect of detection quality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: 'F1 Curve',
                    src: 'https://imgur.com/2wz4wGS',
                    description: 'Shows the harmonic mean of precision and recall. A high F1 score across thresholds indicates balanced detection performance.'
                  },
                  {
                    title: 'R Curve',
                    src: 'https://imgur.com/cQQSkZo',
                    description: 'Represents Recall over different confidence thresholds. A steep rise and high plateau indicate good object coverage.'
                  },
                  {
                    title: 'P Curve',
                    src: 'https://imgur.com/AxA0C6v',
                    description: 'Illustrates Precision across thresholds. Consistently high values show the model avoids false positives effectively.'
                  },
                  {
                    title: 'PR Curve',
                    src: 'https://imgur.com/4SvIeIA',
                    description: 'Precision-Recall curve gives a full picture of the model’s tradeoff. A smooth curve near the top-right suggests excellent performance.'
                  },
                  {
                    title: 'Losses vs Epochs',
                    src: 'https://imgur.com/iaXlhsD',
                    description: 'Displays how classification, box, and objectness losses decrease. A steady decline and convergence indicate successful training.',
                    resize: true
                  },
                  {
                    title: 'mAPs vs Epochs',
                    src: 'https://imgur.com/wK3bZ8Q',
                    description: 'Shows mean Average Precision during training. A rising curve that stabilizes reflects improving and consistent detection accuracy.'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <img
                      src={`${item.src}.png`}
                      alt={item.title}
                      className={`w-full object-cover rounded-md mb-3 ${item.resize ? 'h-64 object-contain' : 'h-auto'}`}
                    />
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance charts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Performance Analysis
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our model underwent extensive performance testing under various conditions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400">
                    <PieChart className="h-16 w-16" />
                  </div>
                  <h4 className="text-center font-medium text-gray-900 dark:text-white mb-2">Detection Accuracy by Time of Day</h4>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Performance analysis across different lighting conditions
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400">
                    <BarChart className="h-16 w-16" />
                  </div>
                  <h4 className="text-center font-medium text-gray-900 dark:text-white mb-2">Vehicle Type Distribution</h4>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Analysis of vehicle class distribution in Dhaka traffic
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400">
                    <LineChart className="h-16 w-16" />
                  </div>
                  <h4 className="text-center font-medium text-gray-900 dark:text-white mb-2">Inference Speed vs Resolution</h4>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Trade-off analysis between processing speed and image quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Results;
