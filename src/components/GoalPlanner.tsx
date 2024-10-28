import React from 'react';
import { Target, AlertCircle } from 'lucide-react';

interface GoalPlannerProps {
  targetAmount: number;
  years: number;
  currentBalance: number;
  monthlyContribution: number;
  interestRate: number;
}

export function GoalPlanner({ targetAmount, years, currentBalance, monthlyContribution, interestRate }: GoalPlannerProps) {
  const projectedAmount = currentBalance * Math.pow(1 + interestRate/100, years) + 
    monthlyContribution * 12 * ((Math.pow(1 + interestRate/100, years) - 1) / (interestRate/100));
  
  const shortfall = targetAmount - projectedAmount;
  const additionalMonthlyRequired = shortfall > 0 ? 
    (shortfall * (interestRate/100)) / (12 * (Math.pow(1 + interestRate/100, years) - 1)) : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Target className="w-5 h-5 text-purple-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Goal Analysis</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Target Amount</span>
          <span className="font-semibold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(targetAmount)}
          </span>
        </div>

        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Projected Amount</span>
          <span className="font-semibold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(projectedAmount)}
          </span>
        </div>

        {shortfall > 0 && (
          <div className="flex items-start gap-2 p-4 bg-amber-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Action Required</h3>
              <p className="text-sm text-gray-600">
                To reach your target, consider increasing your monthly contribution by{' '}
                {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  maximumFractionDigits: 0,
                }).format(additionalMonthlyRequired)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}