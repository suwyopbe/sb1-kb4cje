import React from 'react';
import { TrendingUp, PiggyBank, Coins } from 'lucide-react';

interface InvestmentSummaryProps {
  results: {
    totalInvestment: number;
    totalInterest: number;
    maturityAmount: number;
  };
}

export function InvestmentSummary({ results }: InvestmentSummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-2">
          <PiggyBank className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-gray-600">Total Investment</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {formatCurrency(results.totalInvestment)}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-2">
          <Coins className="w-5 h-5 text-green-600 mr-2" />
          <h3 className="text-gray-600">Interest Earned</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {formatCurrency(results.totalInterest)}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-2">
          <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-gray-600">Maturity Amount</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {formatCurrency(results.maturityAmount)}
        </p>
      </div>
    </div>
  );
}