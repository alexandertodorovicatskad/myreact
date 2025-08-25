import { calculateInvestmentResults, formatter } from "../../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.valueEndOfYear.toFixed(2)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
