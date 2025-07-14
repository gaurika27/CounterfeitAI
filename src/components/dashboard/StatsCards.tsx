import React from 'react';
import { Eye, AlertTriangle, Mail, CheckCircle, TrendingUp, Activity } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Detections',
      value: '1,247',
      change: '+12% from last week',
      icon: Eye,
      trend: 'up',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'High Risk Items',
      value: '89',
      change: '+25% from last week',
      icon: AlertTriangle,
      trend: 'up',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Takedowns Sent',
      value: '156',
      change: '+8% from last week',
      icon: Mail,
      trend: 'up',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Accuracy Rate',
      value: '94.2%',
      change: '+2.1% from last week',
      icon: CheckCircle,
      trend: 'up',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-300">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
            <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
            <span className="text-sm text-green-400">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;