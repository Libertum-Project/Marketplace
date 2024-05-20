'use client';
import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';

import ColumnChart from './charts/ColumnChart';

const Financials: React.FC<{
  propertyPrice: number;
  totalShares: number;
  annualYield: number;
  repaymentDuration: number;
  selectedTokens: number;
  setSelectedTokens: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  propertyPrice,
  totalShares,
  annualYield,
  repaymentDuration,
  selectedTokens,
  setSelectedTokens
}) => {
  const tokenPrice = 50;
  const projectedRentalYield = annualYield / 100;
  const investment = tokenPrice * selectedTokens;
  const rentalIncomePerToken = tokenPrice * projectedRentalYield;
  const annualRentalIncome = rentalIncomePerToken * selectedTokens;
  const monthlyRentalIncome = annualRentalIncome / 12;
  const monthlyRepaymentPerToken = tokenPrice / repaymentDuration;
  const annualCapitalRepayment = monthlyRepaymentPerToken * selectedTokens * 12;
  const monthlyCapitalRepayment = annualCapitalRepayment / 12;
  const annualRepayment = annualRentalIncome + annualCapitalRepayment;
  const monthlyRepayment = annualRepayment / 12;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSelectedTokens(newValue);
  };

  const handleSliderValueChange = (newValue: number[]) => {
    setSelectedTokens(newValue[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-4">
        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Token Price:</TableCell>
              <TableCell className="text-opacity-80">
                ${tokenPrice.toLocaleString('en-US')}
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Total Tokens:</TableCell>
              <TableCell className="text-opacity-80">{totalShares}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Market Value:</TableCell>
              <TableCell className="text-opacity-80">
                ${propertyPrice.toLocaleString('en-US')}
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium ">Income per Token:</TableCell>
              <TableCell className="text-opacity-80">
                ${rentalIncomePerToken.toLocaleString('en-US')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="w-full">
        <ColumnChart
          type="ColumnChart"
          width="400"
          height="400"
          monthlyIncome={monthlyRentalIncome}
        />
        <p className="text-slate-400 text-center">
          Accumulative Rental Income per Month
        </p>
      </div>

      <div>
        <div className="flex gap-6 items-center justify-between mt-6 mb-6">
          <Slider
            defaultValue={[10]}
            value={[selectedTokens]}
            max={totalShares}
            min={1}
            step={1}
            onValueChange={handleSliderValueChange}
            onChange={handleSliderChange}
          />
          <p className="flex-shrink-0 px-4 py-1 bg-libertumGreen bg-opacity-20 rounded-[50px] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold">
            {selectedTokens} Tokens
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Investment:</TableCell>
                <TableCell className="text-opacity-80">
                  ${investment.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Annual Rental Income:
                </TableCell>
                <TableCell className="text-opacity-80">
                  ${annualRentalIncome.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Monthly Rental Income:
                </TableCell>
                <TableCell className="text-opacity-80">
                  ${monthlyRentalIncome.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Capital Repayment Duration:
                </TableCell>
                <TableCell className="text-opacity-80">
                  {repaymentDuration} months
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Monthly Rep. per Token:
                </TableCell>
                <TableCell className="text-opacity-80">
                  ${monthlyRepaymentPerToken.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Annual Cap Repayment:
                </TableCell>
                <TableCell className="text-opacity-80">
                  ${annualCapitalRepayment.toLocaleString('en-US')} / year
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">
                  Monthly Repayment:
                </TableCell>
                <TableCell className="text-opacity-80">
                  ${monthlyRepayment.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Annual Repayment:</TableCell>
                <TableCell className="text-opacity-80">
                  ${annualRepayment.toLocaleString('en-US')}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Financials;
