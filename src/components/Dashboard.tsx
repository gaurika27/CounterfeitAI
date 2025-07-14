import React from 'react';
import StatsCards from './dashboard/StatsCards';
import PlatformDistribution from './dashboard/PlatformDistribution';
import RecentDetections from './dashboard/RecentDetections';

interface DashboardProps {
  scanResults: any[];
  detectionData: any[];
}

const Dashboard = ({ scanResults, detectionData }: DashboardProps) => {
  return (
    <div className="space-y-6">
      <StatsCards />
      <PlatformDistribution detectionData={detectionData} />
      <RecentDetections scanResults={scanResults} />
    </div>
  );
};

export default Dashboard;