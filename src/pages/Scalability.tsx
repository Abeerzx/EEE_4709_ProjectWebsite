import React from 'react';
import { BarChart, Cpu, Globe, Server } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PageTransition from '../components/PageTransition';

const Scalability: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Scalability & Real-World Applications"
            subtitle="Exploring how our system can be deployed and scaled for traffic monitoring"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Deployment scenarios */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Real-World Deployment Scenarios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our YOLOv8s-based vehicle detection system is designed to be adaptable for various traffic monitoring applications.
                Here are some potential real-world deployment scenarios:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mr-4">
                      <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Traffic Analytics & Monitoring
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Deploy the system with existing CCTV infrastructure to gather real-time traffic data,
                    including vehicle counts, classification, and density metrics. This information can help 
                    traffic management authorities make informed decisions and identify congestion patterns.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mr-4">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Smart City Integration
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Integrate with smart city initiatives to provide data for dynamic traffic signal control,
                    adaptive routing systems, and urban planning. The system can feed real-time traffic information
                    to centralized smart city platforms.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mr-4">
                      <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Edge Device Deployment
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Optimize the model for deployment on edge computing devices at traffic intersections,
                    enabling real-time processing without requiring constant connectivity to central servers.
                    This approach reduces latency and bandwidth requirements.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mr-4">
                      <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Cloud-Based Analysis
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Implement a cloud-based solution that receives video feeds from multiple traffic cameras,
                    processes the data, and provides analytical insights through web dashboards. This approach
                    allows for centralized management and historical data analysis.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Scaling strategy */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Scaling Strategy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Expanding our vehicle detection system from a research project to a city-wide deployment requires 
                a well-planned scaling strategy:
              </p>
              
              <div className="relative mb-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
                
                {[
                  {
                    phase: 'Phase 1: Pilot Deployment',
                    description: 'Deploy the system at 3-5 key traffic intersections in Dhaka to validate performance in real-world conditions over an extended period.',
                    timeline: '3 months'
                  },
                  {
                    phase: 'Phase 2: Optimization & Enhancement',
                    description: 'Fine-tune the model based on pilot data, optimize system architecture, and develop scalable data storage and processing infrastructure.',
                    timeline: '6 months'
                  },
                  {
                    phase: 'Phase 3: Expanded Deployment',
                    description: 'Scale to 20-30 strategic traffic points across the city, focusing on high-congestion areas and major intersections.',
                    timeline: '9 months'
                  },
                  {
                    phase: 'Phase 4: City-wide Integration',
                    description: 'Complete integration with existing traffic management systems and expand to cover all major traffic points across Dhaka.',
                    timeline: '18 months'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-3 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {item.phase}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                      Timeline: {item.timeline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical considerations */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Considerations for Scaling
              </h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Infrastructure Requirements
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Scaling our system to monitor traffic across an entire city requires careful consideration
                  of the following infrastructure components:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Requirement</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Scale Estimate</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Computing Resources</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">GPU servers or cloud computing instances</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">~20-30 GPUs for city-wide coverage</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Network Infrastructure</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">High-bandwidth connections for video streams</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">10+ Gbps backbone network</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Storage</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Both for video archives and processed data</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Petabyte-scale storage systems</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Cameras</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">HD or better quality with consistent positioning</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">100-200 cameras for major intersections</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Cost-Efficiency Considerations
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To ensure the economic viability of a large-scale deployment, we recommend:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Phased deployment approach to distribute costs over time</li>
                  <li>Utilizing existing traffic camera infrastructure where possible</li>
                  <li>Implementing edge computing to reduce data transmission costs</li>
                  <li>Developing a hybrid cloud/edge architecture for optimized resource usage</li>
                  <li>Exploring public-private partnerships for funding and implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Scalability;