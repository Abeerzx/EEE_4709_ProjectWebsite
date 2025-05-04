import React from 'react';
import { PlayCircle, Video, Image } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PageTransition from '../components/PageTransition';

const ModelInAction: React.FC = () => {
  const imageLinks = [
    'https://imgur.com/wGDOLAt.png',
    'https://imgur.com/5Iw6UUE.png',
    'https://imgur.com/UEvS0vV.png',
    'https://imgur.com/aaatXKV.png',
    'https://imgur.com/RJFxQLm.png',
    'https://imgur.com/1D6o6WC.png',
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="The Model in Action"
            subtitle="See our YOLOv8s model detecting vehicles in real-world traffic scenarios"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Video demo section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Video Demonstrations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch our model in action as it detects and tracks vehicles in real-time on busy streets of Dhaka.
                These videos demonstrate the model's effectiveness in different scenarios and lighting conditions.
              </p>
              
              <div className="mb-8">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Main Demo Video
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      (Video will be embedded here)
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Video className="h-10 w-10 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Morning Traffic
                      </p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Video className="h-10 w-10 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Evening Rush Hour
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Note: Due to technical difficulties, we are currently unable to upload the video contents. The issue is being actively worked on and will be mitigated soon.
                </p>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Real-time detection of multiple vehicle types</li>
                  <li>Tracking of vehicles across frames</li>
                  <li>Performance in varying lighting conditions</li>
                  <li>Detection accuracy in congested traffic scenarios</li>
                </ul>
              </div>
            </div>
            
            {/* Image gallery */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Detection Samples
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Below are some sample images showing our model's vehicle detection capabilities:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {imageLinks.map((link, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative"
                  >
                    <img src={link} alt={`Sample Detection ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                      Sample Detection {i + 1}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                The model performs reliably in both dense, congested urban roads and light-traffic highways. In certain odd lighting conditions, however, it may mispredict or fail to detect one or two vehicles. These limitations are expected to improve with a larger, more diverse dataset and deployment of a larger YOLOv8 model.
              </p>
            </div>
            
            {/* Live demo section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Interactive Demo
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In the future, we plan to implement an interactive demo that allows you to upload your own 
                traffic images or videos and see our model's detection capabilities in action.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <PlayCircle className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Interactive Demo Coming Soon
                </h4>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Our team is currently working on an interactive web demo that will allow you to test our 
                  model directly in your browser. Check back soon for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ModelInAction;
