import React from 'react';
import { ArrowRight, Car, Camera, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Traffic Congestion and Vehicle Detection using YOLOv8s
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  AI-Powered Vision for Smarter Traffic
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/methodology"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Learn About Our Model
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/model-in-action"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    See It In Action
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md h-64 md:h-80 bg-blue-100 dark:bg-blue-900/20 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-blue-500 dark:text-blue-300">
                  <Brain className="w-24 h-24 md:w-32 md:h-32" />
                </div>
                <span className="absolute bottom-4 right-4 text-sm text-gray-500 dark:text-gray-400">
                  AI Detection Visualization
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Project Overview
          </h2>
          
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Traffic congestion is a significant challenge in urban areas, particularly in densely populated
              cities like Dhaka, Bangladesh. Our project leverages the power of YOLOv8s (You Only Look Once),
              a state-of-the-art object detection model, to identify and track vehicles in real-time traffic scenarios.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Using a custom dataset of over 8,000 images captured from Dhaka's traffic conditions, we've trained
              the YOLOv8s model to accurately detect various types of vehicles, including cars, buses, trucks,
              motorcycles, and rickshaws. This system can process video feeds in real-time, offering an efficient
              solution for traffic monitoring and management.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              By implementing this system, traffic authorities can gain valuable insights into traffic patterns,
              congestion levels, and vehicle distribution, enabling better decision-making for traffic control
              and urban planning.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105 duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Car className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Process live video feeds to detect and classify vehicles with high accuracy and minimal latency.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105 duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Camera className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Custom Dataset
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trained on 8,000+ images specific to Dhaka's traffic scenarios, ensuring high accuracy in local conditions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105 duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Advanced Model
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilizes YOLOv8s for optimal balance between speed and accuracy, perfect for resource-constrained deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;