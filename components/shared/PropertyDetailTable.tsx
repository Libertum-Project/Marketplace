import { Table, TableBody, TableRow, TableCell } from '../ui/table';
interface PropertyDetailTableProps {
  totalShares: number;
  propertyPrice: number;
  annualYield: number;
  repaymentDuration: number;
}
const PropertyDetailTable: React.FC<PropertyDetailTableProps> = ({
  totalShares,
  propertyPrice,
  annualYield,
  repaymentDuration,
}) => {
  const projectedRentalYield = annualYield / 100;
  const tokenPrice = 50;
  const investment = 1 * tokenPrice;
  const annualIncomePerToken = tokenPrice * projectedRentalYield;
  const monthlyIncomePerToken = annualIncomePerToken / 12;
  const annualCapitalRepaymentPerToken = ((propertyPrice / repaymentDuration) * 12) / totalShares;
  const monthlyCapitalRepayment = annualCapitalRepaymentPerToken / 12;
  const monthlyReturnPerToken = monthlyIncomePerToken + monthlyCapitalRepayment;
  const annualReturnPerToken = annualIncomePerToken + annualCapitalRepaymentPerToken;

  return (
    <Table className="border border-slate-500 border-opacity-20">
      <TableBody>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Token Price:</TableCell>
          <TableCell className="text-opacity-80">
            {tokenPrice.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Total Tokens:</TableCell>
          <TableCell className="text-opacity-80">
            {totalShares.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Market Value:</TableCell>
          <TableCell className="text-opacity-80">
            {propertyPrice.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Annual Income per Token:</TableCell>
          <TableCell className="text-opacity-80">
            ${' '}
            {annualIncomePerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Monthly Income Per Token:</TableCell>
          <TableCell className="text-opacity-80">
            ${' '}
            {monthlyIncomePerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Repayment Term:</TableCell>
          <TableCell className="text-opacity-80">{repaymentDuration} months</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Annual Capital Repayment Per Token:</TableCell>
          <TableCell className="text-opacity-80">
            ${' '}
            {annualCapitalRepaymentPerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Monthly Capital Repayment:</TableCell>
          <TableCell className="text-opacity-80">
            {monthlyCapitalRepayment.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>

        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Monthly Return Per Token:</TableCell>
          <TableCell className="text-opacity-80">
            ${' '}
            {monthlyReturnPerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>

        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Annual Return Per Token:</TableCell>
          <TableCell className="text-opacity-80">
            ${' '}
            {annualReturnPerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PropertyDetailTable;
