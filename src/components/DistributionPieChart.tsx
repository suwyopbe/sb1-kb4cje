import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DistributionPieChartProps {
  totalInvestment: number;
  totalInterest: number;
}

export function DistributionPieChart({ totalInvestment, totalInterest }: DistributionPieChartProps) {
  const data = {
    labels: ['Total Investment', 'Interest Earned'],
    datasets: [
      {
        data: [totalInvestment, totalInterest],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',  // Green for investment
          'rgba(99, 102, 241, 0.8)',  // Indigo for interest
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(99, 102, 241, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw;
            const percentage = ((value / (totalInvestment + totalInterest)) * 100).toFixed(1);
            const formattedValue = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(value);
            return `${label}: ${formattedValue} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full aspect-square max-w-[300px] mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
}