import React from 'react';
import { Mail, Image, Database, FileDigit } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PageTransition from '../components/PageTransition';

const Dataset: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Dataset Information"
            subtitle="Learn about the custom dataset used to train our YOLOv8s model"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Dataset overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                About Our Dataset
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our project uses a custom dataset of over 8,900 images captured from various traffic 
                scenarios in Dhaka, Bangladesh. The dataset represents diverse conditions including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Various times of day (morning, afternoon, evening, night)</li>
                <li>Different weather conditions (sunny, rainy, foggy)</li>
                <li>Multiple camera angles and heights</li>
                <li>Diverse traffic densities (from sparse to heavy congestion)</li>
                <li>Different road types (highways, urban streets, intersections)</li>
              </ul>
              
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-6">
                <Database className="h-6 w-6 mr-2" />
                <span className="font-medium">8,900+ annotated images</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Image className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Image Specifications</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Resolution: 640x640</li>
                    <li>Format: JPG</li>
                    <li>Size: 200-500 KB per image</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <FileDigit className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Annotation Format</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>YOLO format (txt files)</li>
                    <li>Bounding box coordinates</li>
                    <li>Class labels for vehicle types</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Vehicle classes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Vehicle Classes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our dataset includes annotations for the following vehicle types:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Car', 'Bus', 'Truck', 'Motorcycle', 'Auto-rickshaw', 'Bicycle', 'Motorcycle','CNG'].map((vehicle) => (
                  <div key={vehicle} className="flex items-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <span className="text-gray-800 dark:text-gray-200">{vehicle}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Request access */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <Mail className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    Request Dataset Access
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Researchers and academics interested in accessing our dataset for non-commercial purposes 
                    can request access by sending an email with your research proposal and affiliation details.
                  </p>
                  <a 
                    href="mailto:adnanshariar@iut-dhaka.edu" 
                    className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Request via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dataset;
