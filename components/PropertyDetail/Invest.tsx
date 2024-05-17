'use client';
import React, { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Subscribe from './Subscribe';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import MintButton from './MintButton';
import { DialogClose } from '@radix-ui/react-dialog';

interface InvestProps {
  title: string;
  price: number;
  annual_yield: number;
  subtitle: string;
  buttonText: string;
  remainingTokens: number;
  contractAddress: string;
  selectedTokens: number;
  setSelectedTokens: React.Dispatch<React.SetStateAction<number>>;
}

const Invest: React.FC<InvestProps> = ({
  title,
  price,
  annual_yield,
  subtitle,
  buttonText,
  remainingTokens,
  contractAddress,
  selectedTokens,
  setSelectedTokens,
}) => {
  const [areTermsAccepted, setAreTermsAccepted] = useState<boolean>(false);
  const allowBuy: boolean = true;

  const totalPrice = isNaN(Number(selectedTokens)) ? '' : (Number(selectedTokens) * price).toFixed(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' || event.target.value === '0' || event.target.value.startsWith('-')) {
      setSelectedTokens(1);
    } else {
      const newValue = Number(event.target.value);
      setSelectedTokens(newValue);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAreTermsAccepted(event.target.checked);
  };

  return (
    <div className="max-w-lg mx-auto md:bg-white shadow-md rounded p-2 md:p-6 space-y-4 bg-slate-100">
      <h2 className="text-3xl font-bold mb-4 font-space_grotesk">Invest in {title}</h2>

      <div className="space-y-[2px]">
        <label className="form-label inline-block mb-2 text-gray-700 font-space_grotesk font-bold">
          Enter token amount
        </label>
        <div className="flex gap-2 justify-between items-center">
          <input
            type="number"
            className="
              form-control
              block
              w-[calc(100%/3)]
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-libertumGreen  focus:outline-none
            "
            value={selectedTokens}
            onChange={handleChange}
            placeholder="10"
          />
          <p> = </p>
          <div className="flex justify-between items-center border rounded-[5px] w-4/5">
            <div className="flex-1">
              <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">$ USD</p>
            </div>
            <div className="flex-1">
              <p className="text-black opacity-80 text-lg px-3 py-2 rounded-r-lg bg-gray-50 ">$ {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center border rounded-[5px]">
        <div className="flex flex-1">
          <div className="flex-1 bg-gray-200">
            <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">Proyect annual Yield</p>
          </div>
          <div className="flex-1">
            <p className="text-black opacity-50 text-lg px-3 py-2 bg-gray-100 rounded-r-lg">{annual_yield}%</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center border rounded-[5px]">
        <div className="flex flex-1">
          <div className="flex-1 bg-gray-200">
            <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">Proyect annual Return</p>
          </div>
          <div className="flex-1">
            <p className="text-black opacity-50 text-lg px-3 py-2 bg-gray-100 rounded-r-lg">$5000</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={areTermsAccepted}
          onChange={handleCheckboxChange}
          className="w-6 h-6  border rounded-md border-gray-300 bg-white"
        />
        <label
          htmlFor="terms"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00000081] select-none"
        >
          I confirm that I have read and agree to the Terms of Use, Risk Disclaimers, and Privacy Notice.
        </label>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full bg-libertumGreen text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk select-none hover:border-white hover:text-white"
          >
            Invest Now!
          </Button>
          {/*          
          I DIDNT DELETE IT BECAUSE WE WILL PROBABLY NEED THIS LINES IN THE FUTURE

          {allowBuy ? (
            <MintButton
              contractAddress={contractAddress}
              amount={selectedTokens}
              price={price}
              remainingTokens={remainingTokens}
              areTermsAccepted={areTermsAccepted}
            />
          ) : (
            <Button
              variant="outline"
              className="w-full bg-libertumGreen text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk select-none"
            >
              Invest Now!
            </Button>
          )} */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-6 bg-white">
          <DialogHeader>
            <DialogTitle>Waitlist! Secure your VIP pass to the pre-launch excitement.</DialogTitle>
            <DialogDescription>
              Reserve your spot on the waitlist for exclusive early access to the Libertum platform. Simply enter your
              email, and we make sure you will be among the first in line to experience and earn passive rental income
              platform when it is unveiled!
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only"></Label>
              <Input id="link" placeholder="Write your email here" />
            </div>
            <DialogClose>
              <Button
                type="submit"
                className="px-3 bg-libertumGreen w-fit text-white rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk'"
              >
                Subscribe
              </Button>
            </DialogClose>
          </div>
          {/* <Subscribe /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Invest;
