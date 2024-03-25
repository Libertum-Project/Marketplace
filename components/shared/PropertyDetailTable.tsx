import { Table, TableBody, TableRow, TableCell } from '../ui/table';

const PropertyDetailTable = () => {
  return (
    <Table className="border border-slate-500 border-opacity-20">
      <TableBody>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Token Price:</TableCell>
          <TableCell className="text-opacity-80">$50</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Total Tokens:</TableCell>
          <TableCell className="text-opacity-80">4500</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Market Value:</TableCell>
          <TableCell className="text-opacity-80">$1,500,00</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium ">Income per Token:</TableCell>
          <TableCell className="text-opacity-80">$2,50</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Capital Repayment:</TableCell>
          <TableCell className="text-opacity-80">3.33%</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Repayment Term:</TableCell>
          <TableCell className="text-opacity-80">30 years</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Rental Yield:</TableCell>
          <TableCell className="text-opacity-80">7.58%</TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#F5F5F5]">
          <TableCell className="font-medium">Annual Return:</TableCell>
          <TableCell className="text-opacity-80">$458</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PropertyDetailTable;
