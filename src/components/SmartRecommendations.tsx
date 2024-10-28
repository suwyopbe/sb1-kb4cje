import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface SmartRecommendationsProps {
  monthlyContribution: number;
  interestRate: number;
  years: number;
  totalInvestment: number;
}

export function SmartRecommendations({ monthlyContribution, interestRate, years, totalInvestment }: SmartRecommendationsProps) {
  const maxContribution = 150000; // Maximum yearly PPF contribution
  const yearlyContribution = monthlyContribution * 12;
  const remainingContribution = maxContribution - yearlyContribution;
  
  const recommendations = [];

  // Contribution optimization
  if (yearlyContribution < maxContribution) {
    recommendations.push({
      type: 'opportunity',
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      title: 'Tax Benefit Opportunity',
      description: `You can invest ₹${remainingContribution.toLocaleString('en-IN')} more annually to maximize tax benefits under Section 80C.`,
    });
  }

  // Interest rate analysis
  if (interestRate > 7.1) {
    recommendations.push({
      type: 'warning',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: 'Interest Rate Assumption',
      description: 'Your calculations use an optimistic interest rate. Consider using the current PPF rate of 7.1% for conservative planning.',
    });
  }

  // Investment strategy
  if (totalInvestment > 0 && years >= 15) {
    recommendations.push({
      type: 'success',
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      title: 'Extension Strategy',
      description: 'Consider extending your PPF account in blocks of 5 years after maturity to continue earning tax-free returns.',
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Brain className="w-5 h-5 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Smart Insights</h2>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              rec.type === 'warning'
                ? 'bg-amber-50'
                : rec.type === 'opportunity'
                ? 'bg-green-50'
                : 'bg-blue-50'
            }`}
          >
            <div className="flex items-start gap-3">
              {rec.icon}
              <div>
                <h3 className="font-semibold text-gray-800">{rec.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}