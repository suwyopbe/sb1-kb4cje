import React from 'react';
import { LightbulbIcon, Target, Shield, TrendingUp, Wallet } from 'lucide-react';

export function InvestmentAdvice() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <LightbulbIcon className="w-5 h-5 text-yellow-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Smart PPF Investment Tips</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Target className="w-4 h-4 text-blue-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Maximize Tax Benefits</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Invest up to ₹1.5 lakhs annually to get maximum tax deduction under Section 80C. This reduces your taxable income while building long-term wealth.
          </p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Shield className="w-4 h-4 text-green-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Consistent Contributions</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Make regular monthly contributions instead of lump sum deposits at year-end. This helps develop a savings habit and benefits from compound interest.
          </p>
        </div>

        <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Long-term Planning</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Consider extending beyond the 15-year lock-in period. Every 5-year extension can significantly increase your wealth through compound interest.
          </p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Wallet className="w-4 h-4 text-purple-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Emergency Fund</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Keep 6 months of expenses in liquid funds before maximizing PPF. This ensures you won't need to withdraw prematurely from your PPF account.
          </p>
        </div>
      </div>
    </div>
  );
}