import React from 'react';
import { Shield, Bell, Play, Pause } from 'lucide-react';

interface HeaderProps {
  user: any;
  isRealTimeActive: boolean;
  onRealTimeToggle: () => void;
}

const Header = ({ user, isRealTimeActive, onRealTimeToggle }: HeaderProps) => {
  return (
    <header className="bg-black/30 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CounterfeitAI</h1>
              <p className="text-sm text-purple-300">Fake Brand Detector</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onRealTimeToggle}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isRealTimeActive 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {isRealTimeActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRealTimeActive ? 'Stop' : 'Start'} Monitoring</span>
            </button>
            
            <button className="p-2 text-gray-300 hover:text-white">
              <Bell className="w-5 h-5" />
            </button>
            
            {user && (
              <div className="flex items-center space-x-2">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm">
                  <p className="text-white">{user.name}</p>
                  <p className="text-purple-300">{user.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;