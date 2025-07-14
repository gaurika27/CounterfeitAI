import React from 'react';

interface FeedbackProps {
  feedbackData: any[];
}

const Feedback = ({ feedbackData }: FeedbackProps) => {
  return (
    <div className="space-y-6">
      {/* Feedback Analytics */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">AI Feedback System</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h4 className="text-md font-medium text-purple-300 mb-3">Recent Feedback</h4>
            <div className="space-y-3">
              {feedbackData.map(feedback => (
                <div key={feedback.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        feedback.type === 'positive' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-white font-medium">
                        Accuracy: {feedback.accuracy.toFixed(1)}%
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {feedback.type === 'positive' ? 'Positive' : 'Negative'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{feedback.feedback}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-purple-300 mb-3">Feedback Stats</h4>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-400">Average Accuracy</p>
                <p className="text-xl font-bold text-white">92.3%</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-400">Positive Feedback</p>
                <p className="text-xl font-bold text-green-400">87%</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-400">Model Improvements</p>
                <p className="text-xl font-bold text-purple-400">+5.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Submit Feedback</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">
              Detection Result ID
            </label>
            <input
              type="text"
              placeholder="Enter result ID"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">
              Feedback Type
            </label>
            <select className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none">
              <option value="correct">Correct Detection</option>
              <option value="false_positive">False Positive</option>
              <option value="false_negative">False Negative</option>
              <option value="improvement">Improvement Suggestion</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">
              Comments
            </label>
            <textarea
              rows={4}
              placeholder="Provide detailed feedback..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;