import React from 'react';
import { IndianRupee, Calendar, Percent, PiggyBank, Target } from 'lucide-react';

interface CalculatorInputProps {
  principal: number;
  setPrincipal: (value: number) => void;
  years: number;
  setYears: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  monthlyContribution: number;
  setMonthlyContribution: (value: number) => void;
  targetAmount: number;
  setTargetAmount: (value: number) => void;
}

export function CalculatorInput({
  principal,
  setPrincipal,
  years,
  setYears,
  interestRate,
  setInterestRate,
  monthlyContribution,
  setMonthlyContribution,
  targetAmount,
  setTargetAmount,
}: CalculatorInputProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Investment Details</h2>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <IndianRupee className="w-4 h-4 mr-2" />
            Initial Investment
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            min="500"
            step="100"
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <PiggyBank className="w-4 h-4 mr-2" />
            Monthly Contribution
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            min="500"
            step="100"
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Target className="w-4 h-4 mr-2" />
            Target Amount
          </label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            min="100000"
            step="10000"
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            min="15"
            max="50"
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Percent className="w-4 h-4 mr-2" />
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            step="0.1"
            min="0"
            max="12"
          />
        </div>
      </div>
    </div>
  );
}