import React, { useRef, useState } from 'react';
import { Upload, Search, RefreshCw, Mail, CheckCircle } from 'lucide-react';
import { hasPermission } from '../utils/permissions';
import { generateTakedown } from '../utils/takedown';

interface ScannerProps {
  scanResults: any[];
  isScanning: boolean;
  riskScore: number;
  onAnalyze: (source: any) => void;
  user: any;
}

const Scanner = ({ scanResults, isScanning, riskScore, onAnalyze, user }: ScannerProps) => {
  const [socialUrl, setSocialUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onAnalyze({ type: 'file', value: file });
    }
  };

  const handleUrlSubmit = () => {
    if (socialUrl) {
      onAnalyze({ type: 'url', value: socialUrl });
      setSocialUrl('');
    }
  };

  const handleMarkAccurate = (result: any) => {
    // Implementation for marking as accurate
    console.log('Marked as accurate:', result.id);
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Content Scanner</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Upload */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-purple-300">Upload Media</h4>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-purple-500/50 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
            >
              <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-white">Click to upload image or video</p>
              <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG, MP4, MOV</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* URL Input */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-purple-300">Social Media URL</h4>
            <div className="space-y-3">
              <input
                type="url"
                value={socialUrl}
                onChange={(e) => setSocialUrl(e.target.value)}
                placeholder="https://instagram.com/p/example"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
              <button
                onClick={handleUrlSubmit}
                disabled={!socialUrl || isScanning}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isScanning ? (
                  <div className="flex items-center justify-center space-x-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Scanning...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Analyze URL</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {scanResults.length > 0 && (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Scan Results</h3>
          <div className="space-y-4">
            {scanResults.map(result => (
              <div key={result.id} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={result.image} 
                      alt="Scanned content" 
                      className="w-16 h-16 rounded-lg object-cover"
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
                    <span className="text-purple-300 font-bold text-lg">
                      {(result.riskScore * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Visual Detection */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-purple-300 mb-2">Visual Detection</h5>
                    <p className="text-white">Brand: {result.visualDetection?.brand}</p>
                    <p className="text-sm text-gray-400">
                      Confidence: {((result.visualDetection?.confidence || 0) * 100).toFixed(1)}%
                    </p>
                  </div>

                  {/* Text Analysis */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-purple-300 mb-2">Text Analysis</h5>
                    <p className="text-white">Sentiment: {result.textAnalysis?.sentiment}</p>
                    <p className="text-sm text-gray-400">
                      Keywords: {result.textAnalysis?.foundKeywords?.join(', ') || 'None'}
                    </p>
                  </div>

                  {/* Brand Matches */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-purple-300 mb-2">Brand Matches</h5>
                    {result.brandMatches?.map((match: any) => (
                      <div key={match.sku} className="text-sm">
                        <span className="text-white">{match.brand}</span>
                        <span className="text-gray-400 ml-2">
                          {(match.similarity * 100).toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {hasPermission(user?.role, 'Legal Team') && (
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={() => {
                        const takedown = generateTakedown(result);
                        const blob = new Blob([takedown], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `takedown_${result.id}.txt`;
                        a.click();
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Generate Takedown
                    </button>
                    <button
                      onClick={() => handleMarkAccurate(result)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Mark Accurate
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanner;