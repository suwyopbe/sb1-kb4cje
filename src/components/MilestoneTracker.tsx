import React from 'react';
import { Flag, Award, Trophy } from 'lucide-react';

interface Milestone {
  amount: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MilestoneTrackerProps {
  currentAmount: number;
}

export function MilestoneTracker({ currentAmount }: MilestoneTrackerProps) {
  const milestones: Milestone[] = [
    {
      amount: 500000,
      title: "Basic Security",
      description: "Emergency fund milestone reached",
      icon: <Flag className="w-5 h-5 text-blue-500" />,
    },
    {
      amount: 1500000,
      title: "Tax Optimizer",
      description: "Maximum tax benefit achieved",
      icon: <Award className="w-5 h-5 text-purple-500" />,
    },
    {
      amount: 5000000,
      title: "Wealth Builder",
      description: "Significant wealth accumulation",
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Investment Milestones</h2>
      <div className="space-y-4">
        {milestones.map((milestone, index) => {
          const progress = Math.min((currentAmount / milestone.amount) * 100, 100);
          const achieved = currentAmount >= milestone.amount;

          return (
            <div key={index} className="relative">
              <div className="flex items-center mb-2">
                {milestone.icon}
                <span className={`ml-2 font-semibold ${achieved ? 'text-green-600' : 'text-gray-600'}`}>
                  {milestone.title}
                </span>
                <span className="ml-auto text-sm text-gray-500">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(milestone.amount)}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}