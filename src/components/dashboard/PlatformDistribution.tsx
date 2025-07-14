import React from 'react';

interface PlatformDistributionProps {
  detectionData: any[];
}

const PlatformDistribution = ({ detectionData }: PlatformDistributionProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-white mb-4">Platform Distribution</h3>
      <div className="space-y-4">
        {detectionData.map(platform => (
          <div key={platform.platform} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{platform.platform[0]}</span>
              </div>
              <span className="text-white">{platform.platform}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${platform.percentage}%` }}
                ></div>
              </div>
              <span className="text-white font-medium">{platform.count}</span>
              <span className="text-green-400 text-sm">{platform.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformDistribution;