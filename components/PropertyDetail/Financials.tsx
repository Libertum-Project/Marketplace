import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';

const Financials: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-4">
        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
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
          </TableBody>
        </Table>

        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
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
              <TableCell className="font-medium ">Annual Return:</TableCell>
              <TableCell className="text-opacity-80">$458</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>GRAFICO</div>

      <div>
        <div className="flex gap-6 items-center justify-between mt-6 mb-6">
          <Slider defaultValue={[33]} max={100} step={1} />
          <p className="flex-shrink-0 px-4 py-1 bg-teal-200 bg-opacity-10 rounded-[50px] border border-teal-500 items-center justify-center text-teal-500 text-sm">
            50 Tokens
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
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
                <TableCell className="font-medium ">
                  Income per Token:
                </TableCell>
                <TableCell className="text-opacity-80">$2,50</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Capital Repayment:
                </TableCell>
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
                <TableCell className="font-medium ">Annual Return:</TableCell>
                <TableCell className="text-opacity-80">$458</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Financials;
