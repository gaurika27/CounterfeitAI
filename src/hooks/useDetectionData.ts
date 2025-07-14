import { useState, useEffect } from 'react';
import { performAnalysis } from '../services/detectionService';

export const useDetectionData = () => {
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [detectionData, setDetectionData] = useState<any[]>([]);
  const [worldMapData, setWorldMapData] = useState<any[]>([]);
  const [takedownHistory, setTakedownHistory] = useState<any[]>([]);
  const [feedbackData, setFeedbackData] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [riskScore, setRiskScore] = useState(0);

  // Initialize mock data
  useEffect(() => {
    setDetectionData([
      { platform: 'Instagram', count: 245, percentage: 45, trend: '+12%' },
      { platform: 'Facebook', count: 189, percentage: 35, trend: '+8%' },
      { platform: 'TikTok', count: 78, percentage: 14, trend: '+25%' },
      { platform: 'YouTube', count: 32, percentage: 6, trend: '-5%' }
    ]);

    setWorldMapData([
      { country: 'China', risk: 85, cases: 156 },
      { country: 'India', risk: 72, cases: 98 },
      { country: 'Pakistan', risk: 68, cases: 45 },
      { country: 'Bangladesh', risk: 61, cases: 23 },
      { country: 'Vietnam', risk: 58, cases: 19 }
    ]);

    setTakedownHistory([
      { id: 1, platform: 'Instagram', status: 'Approved', date: '2024-07-10', type: 'DMCA' },
      { id: 2, platform: 'Facebook', status: 'Pending', date: '2024-07-12', type: 'Brand Report' },
      { id: 3, platform: 'TikTok', status: 'Rejected', date: '2024-07-11', type: 'DMCA' }
    ]);

    setFeedbackData([
      { id: 1, accuracy: 94, feedback: 'Correct detection', type: 'positive' },
      { id: 2, accuracy: 87, feedback: 'False positive', type: 'negative' },
      { id: 3, accuracy: 96, feedback: 'Accurate brand match', type: 'positive' }
    ]);
  }, []);

  const analyzeContent = async (source: any) => {
    setIsScanning(true);
    try {
      const result = await performAnalysis(source);
      setScanResults(prev => [result, ...prev]);
      setRiskScore(result.riskScore);
    } catch (error) {
      console.error('Analysis error:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const toggleRealTimeMonitoring = () => {
    // Implementation for real-time monitoring
    console.log('Real-time monitoring toggled');
  };

  return {
    scanResults,
    detectionData,
    worldMapData,
    takedownHistory,
    feedbackData,
    isScanning,
    riskScore,
    analyzeContent,
    toggleRealTimeMonitoring
  };
};