import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Scanner from './Scanner';
import WorldMap from './WorldMap';
import Takedowns from './Takedowns';
import Feedback from './Feedback';
import { useAuth } from '../hooks/useAuth';
import { useDetectionData } from '../hooks/useDetectionData';

const CounterfeitAI = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isRealTimeActive, setIsRealTimeActive] = useState(false);
  
  const { user } = useAuth();
  const { 
    scanResults, 
    detectionData, 
    worldMapData, 
    takedownHistory, 
    feedbackData,
    isScanning,
    riskScore,
    analyzeContent,
    toggleRealTimeMonitoring
  } = useDetectionData();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleRealTimeToggle = () => {
    setIsRealTimeActive(!isRealTimeActive);
    toggleRealTimeMonitoring();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header 
        user={user}
        isRealTimeActive={isRealTimeActive}
        onRealTimeToggle={handleRealTimeToggle}
      />
      
      <Navigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard 
            scanResults={scanResults}
            detectionData={detectionData}
          />
        )}
        
        {activeTab === 'scanner' && (
          <Scanner 
            scanResults={scanResults}
            isScanning={isScanning}
            riskScore={riskScore}
            onAnalyze={analyzeContent}
            user={user}
          />
        )}
        
        {activeTab === 'worldmap' && (
          <WorldMap 
            worldMapData={worldMapData}
            detectionData={detectionData}
          />
        )}
        
        {activeTab === 'takedowns' && (
          <Takedowns 
            takedownHistory={takedownHistory}
            user={user}
          />
        )}
        
        {activeTab === 'feedback' && (
          <Feedback 
            feedbackData={feedbackData}
          />
        )}
      </main>
    </div>
  );
};

export default CounterfeitAI;