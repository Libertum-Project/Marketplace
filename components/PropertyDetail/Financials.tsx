'use client';
import React, { useRef } from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';

import ColumnChart from './charts/ColumnChart';
import { Input } from '../ui/input';

const Financials: React.FC<{
  propertyPrice: number;
  totalShares: number;
  annualYield: number;
  repaymentDuration: number;
  selectedTokens: number;
  setSelectedTokens: React.Dispatch<React.SetStateAction<number>>;
}> = ({ propertyPrice, totalShares, annualYield, repaymentDuration, selectedTokens, setSelectedTokens }) => {
  const projectedRentalYield = annualYield / 100;
  const tokenPrice = 50;
  const investment = selectedTokens * tokenPrice;
  const annualIncomePerToken = tokenPrice * projectedRentalYield;
  const monthlyIncomePerToken = annualIncomePerToken / 12;
  const annualCapitalRepaymentPerToken = ((propertyPrice / repaymentDuration) * 12) / totalShares;
  const monthlyCapitalRepayment = annualCapitalRepaymentPerToken / 12;
  const monthlyReturnPerToken = monthlyIncomePerToken + monthlyCapitalRepayment;
  const annualReturnPerToken = annualIncomePerToken + annualCapitalRepaymentPerToken;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSliderValueChange = (newValue: number[]) => {
    setSelectedTokens(newValue[0]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleTokenValueChange = (value: number) => {
    if (isNaN(value) || value <= 0) {
      setSelectedTokens(1);
    } else if (value > totalShares) {
      setSelectedTokens(totalShares);
    } else {
      setSelectedTokens(value);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-4">
        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Token Price:</TableCell>
              <TableCell className="text-opacity-80">${tokenPrice.toLocaleString('en-US')}</TableCell>
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
              <TableCell className="text-opacity-80">${propertyPrice.toLocaleString('en-US')}</TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium ">Rental Yield:</TableCell>
              <TableCell className="text-opacity-80">{annualYield.toLocaleString('en-US')}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="w-full">
        <ColumnChart type="ColumnChart" width="400" height="400" monthlyIncome={monthlyIncomePerToken} />
        <p className="text-slate-400 text-center">Accumulative Rental Income per Month</p>
      </div>

      <div>
        <div className="flex gap-6 items-center justify-between mt-6 mb-6">
          <Slider
            className="cursor-pointer"
            defaultValue={[10]}
            value={[selectedTokens]}
            max={totalShares}
            min={1}
            step={10}
            onValueChange={handleSliderValueChange}
          />
          <div className="flex gap-2 px-4 py-1 bg-libertumGreen bg-opacity-20 rounded-[50px] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold">
            <Input
              value={selectedTokens}
              type="number"
              className="p-3 text-center outline-none h-0 max-w-[4.5rem] w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none caret-libertumGreen"
              onChange={(e) => handleTokenValueChange(+e.target.valueAsNumber)}
              ref={inputRef}
            />
            Tokens
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Investment:</TableCell>
                <TableCell className="text-opacity-80">${investment.toLocaleString('en-US')}</TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Annual Income:</TableCell>
                <TableCell className="text-opacity-80">
                  ${(annualIncomePerToken * selectedTokens).toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Monthly Income:</TableCell>
                <TableCell className="text-opacity-80">
                  ${(monthlyIncomePerToken * selectedTokens).toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">Capital Repayment Duration:</TableCell>
                <TableCell className="text-opacity-80">{repaymentDuration} months</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Monthly Rep. per Token:</TableCell>
                <TableCell className="text-opacity-80">${monthlyCapitalRepayment.toLocaleString('en-US')}</TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Annual Cap Repayment:</TableCell>
                <TableCell className="text-opacity-80">
                  ${(annualCapitalRepaymentPerToken * selectedTokens).toLocaleString('en-US')} / year
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Monthly Return:</TableCell>
                <TableCell className="text-opacity-80">
                  ${(monthlyReturnPerToken * selectedTokens).toLocaleString('en-US')}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Annual Return:</TableCell>
                <TableCell className="text-opacity-80">
                  ${(annualReturnPerToken * selectedTokens).toLocaleString('en-US')}
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
