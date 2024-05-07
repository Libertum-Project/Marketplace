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
  const proyectedRentalYield = annualYield / 100;
  const tokenPrice = propertyPrice / totalShares;
  const investment = 1 * tokenPrice;
  const rentalIncomePerToken = tokenPrice * proyectedRentalYield;
  const annualRentalIncome = investment * rentalIncomePerToken;
  const monthlyRentalIncome = annualRentalIncome / 12;
  const annualCapitalRepayment = investment / (repaymentDuration / 12);
  const monthlyCapitalRepaymentPerToken = investment / totalShares / repaymentDuration;
  const monthlyCapitalRepayment = annualCapitalRepayment / 12;
  const annualRepayment = annualCapitalRepayment + annualRentalIncome;
  const monthlyRepayment = annualRepayment / 12;

  const numberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

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
          <TableCell className="font-medium">Income per Token:</TableCell>
          <TableCell className="text-opacity-80">
            {rentalIncomePerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Capital Repayment:</TableCell>
          <TableCell className="text-opacity-80">
            {monthlyCapitalRepaymentPerToken.toLocaleString('en-US', {
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
          <TableCell className="font-medium">Rental Income:</TableCell>
          <TableCell className="text-opacity-80">
            {rentalIncomePerToken.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Annual Return:</TableCell>
          <TableCell className="text-opacity-80">
            {annualRentalIncome.toLocaleString('en-US', {
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
