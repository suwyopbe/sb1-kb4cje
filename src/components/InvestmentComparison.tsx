import React from 'react';
import { BarChart, Scale } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface InvestmentComparisonProps {
  ppfAmount: number;
  years: number;
}

export function InvestmentComparison({ ppfAmount, years }: InvestmentComparisonProps) {
  // Simplified calculations for comparison
  const fdReturn = ppfAmount * Math.pow(1.055, years); // Assuming 5.5% FD rate
  const npsReturn = ppfAmount * Math.pow(1.10, years); // Assuming 10% NPS rate
  
  const data = {
    labels: ['PPF', 'Fixed Deposit', 'NPS (Estimated)'],
    datasets: [
      {
        label: 'Projected Returns',
        data: [ppfAmount, fdReturn, npsReturn],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(context.raw);
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function(value: any) {
            return new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(value);
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Scale className="w-5 h-5 text-yellow-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Investment Comparison</h2>
      </div>
      <Bar data={data} options={options} />
      <div className="mt-4 text-sm text-gray-600">
        <p>* NPS returns are estimated based on historical performance</p>
        <p>* FD rates may vary based on bank and tenure</p>
      </div>
    </div>
  );
}