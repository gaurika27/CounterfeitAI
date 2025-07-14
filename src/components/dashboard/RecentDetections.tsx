import React from 'react';

interface RecentDetectionsProps {
  scanResults: any[];
}

const RecentDetections = ({ scanResults }: RecentDetectionsProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Detections</h3>
      <div className="space-y-3">
        {scanResults.slice(0, 5).map(result => (
          <div key={result.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <img 
                src={result.image} 
                alt="Detection" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="text-white font-medium">{result.platform}</p>
                <p className="text-sm text-gray-400">{new Date(result.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                result.status === 'High Risk' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                  : result.status === 'Medium Risk'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                  : 'bg-green-500/20 text-green-400 border border-green-500/50'
              }`}>
                {result.status}
              </div>
              <span className="text-purple-300 font-medium">
                {(result.riskScore * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDetections;