import React from 'react';
import { BarChart3, Search, Globe, Flag, MessageSquare } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'scanner', label: 'Scanner', icon: Search },
    { id: 'worldmap', label: 'World Map', icon: Globe },
    { id: 'takedowns', label: 'Takedowns', icon: Flag },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare }
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;