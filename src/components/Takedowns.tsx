import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { hasPermission } from '../utils/permissions';

interface TakedownsProps {
  takedownHistory: any[];
  user: any;
}

const Takedowns = ({ takedownHistory, user }: TakedownsProps) => {
  return (
    <div className="space-y-6">
      {/* Takedown Management */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Takedown Management</h3>
          {hasPermission(user?.role, 'Legal Team') && (
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
              <FileText className="w-4 h-4 inline mr-2" />
              New Template
            </button>
          )}
        </div>

        <div className="space-y-4">
          {takedownHistory.map(takedown => (
            <div key={takedown.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{takedown.platform[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{takedown.platform}</p>
                    <p className="text-sm text-gray-400">{takedown.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm">{takedown.type}</span>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    takedown.status === 'Approved' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : takedown.status === 'Pending'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                      : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}>
                    {takedown.status}
                  </div>
                  <button className="p-2 text-gray-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Takedown Templates */}
      {hasPermission(user?.role, 'Legal Team') && (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Takedown Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2">DMCA Notice</h5>
              <p className="text-sm text-gray-400 mb-3">Standard copyright infringement notice</p>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Use Template
              </button>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2">Brand Report</h5>
              <p className="text-sm text-gray-400 mb-3">Trademark violation report</p>
              <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Takedowns;