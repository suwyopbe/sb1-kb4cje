export function calculatePPF(
  principal: number,
  monthlyContribution: number,
  years: number,
  interestRate: number
) {
  const yearlyContribution = monthlyContribution * 12;
  const yearlyData = [];
  let totalInvestment = principal;
  let balance = principal;
  let totalInterest = 0;

  for (let year = 1; year <= years; year++) {
    const yearlyInterest = balance * (interestRate / 100);
    balance += yearlyInterest + yearlyContribution;
    totalInvestment += yearlyContribution;
    totalInterest += yearlyInterest;

    yearlyData.push({
      year,
      balance,
      totalInvestment,
      interestEarned: totalInterest,
    });
  }

  return {
    yearlyData,
    totalInvestment,
    totalInterest,
    maturityAmount: balance,
  };
}