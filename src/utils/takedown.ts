export const generateTakedown = (result: any): string => {
  const template = `
DMCA Takedown Notice

To: ${result.platform} Legal Team
From: Walmart Inc.
Date: ${new Date().toDateString()}

We have identified counterfeit content that infringes on our trademark and copyright:

Content Details:
- Platform: ${result.platform}
- Risk Score: ${(result.riskScore * 100).toFixed(1)}%
- Detected Brand: ${result.visualDetection?.brand}
- Suspicious Keywords: ${result.textAnalysis?.foundKeywords?.join(', ')}

We request immediate removal of this content under DMCA provisions.

Best regards,
Walmart Legal Team
`;

  return template;
};