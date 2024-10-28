import React, { useState } from 'react';
import { LineChart, Calculator as CalcIcon, TrendingUp, Percent } from 'lucide-react';
import { PPFChart } from './PPFChart';
import { InvestmentSummary } from './InvestmentSummary';
import { CalculatorInput } from './CalculatorInput';
import { DistributionPieChart } from './DistributionPieChart';
import { InvestmentAdvice } from './InvestmentAdvice';
import { GoalPlanner } from './GoalPlanner';
import { InvestmentComparison } from './InvestmentComparison';
import { MilestoneTracker } from './MilestoneTracker';
import { SmartRecommendations } from './SmartRecommendations';
import { calculatePPF } from '../utils/ppfCalculations';

export function Calculator() {
  const [principal, setPrincipal] = useState<number>(500);
  const [years, setYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(7.1);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [targetAmount, setTargetAmount] = useState<number>(2000000);

  const results = calculatePPF(principal, monthlyContribution, years, interestRate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Smart PPF Calculator
          </h1>
          <p className="text-gray-600">
            Plan your wealth with personalized insights and milestone tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <CalculatorInput
                principal={principal}
                setPrincipal={setPrincipal}
                years={years}
                setYears={setYears}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
                monthlyContribution={monthlyContribution}
                setMonthlyContribution={setMonthlyContribution}
                targetAmount={targetAmount}
                setTargetAmount={setTargetAmount}
              />
            </div>

            <div className="mt-6">
              <SmartRecommendations
                monthlyContribution={monthlyContribution}
                interestRate={interestRate}
                years={years}
                totalInvestment={results.totalInvestment}
              />
            </div>

            <div className="mt-6">
              <MilestoneTracker currentAmount={results.maturityAmount} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <LineChart className="w-5 h-5 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Growth Projection</h2>
              </div>
              <PPFChart data={results.yearlyData} />
            </div>

            <InvestmentSummary results={results} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <GoalPlanner
                targetAmount={targetAmount}
                years={years}
                currentBalance={principal}
                monthlyContribution={monthlyContribution}
                interestRate={interestRate}
              />
              
              <InvestmentComparison
                ppfAmount={results.maturityAmount}
                years={years}
              />
            </div>

            <div className="mt-6">
              <InvestmentAdvice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}