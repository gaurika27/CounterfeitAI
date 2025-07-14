// AI Detection Service
export const performAnalysis = async (source: any) => {
  // Simulate analysis delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const mockResult = {
    id: Date.now(),
    platform: source.type === 'url' ? 'Instagram' : 'Upload',
    riskScore: Math.random() * 0.6 + 0.2, // 20-80% risk
    status: '',
    visualDetection: {
      brand: 'Walmart',
      confidence: Math.random() * 0.4 + 0.6,
      boundingBox: { x: 120, y: 80, width: 200, height: 150 }
    },
    textAnalysis: {
      suspicionScore: Math.random() * 0.8,
      foundKeywords: ['replica', 'original'],
      sentiment: 'suspicious',
      confidence: Math.random() * 0.3 + 0.7
    },
    brandMatches: [
      { brand: 'Walmart', similarity: 0.92, sku: 'WMT-123456' },
      { brand: 'Great Value', similarity: 0.87, sku: 'GV-789012' }
    ],
    metadata: {
      accountAge: 15,
      followers: 1200,
      location: 'Mumbai, India',
      verified: false
    },
    timestamp: new Date().toISOString(),
    image: source.type === 'file' 
      ? URL.createObjectURL(source.value)
      : 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  };

  // Determine status based on risk score
  mockResult.status = mockResult.riskScore > 0.7 ? 'High Risk' : 
                     mockResult.riskScore > 0.4 ? 'Medium Risk' : 'Low Risk';

  return mockResult;
};