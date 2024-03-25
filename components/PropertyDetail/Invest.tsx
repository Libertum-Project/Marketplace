import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface InvestProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Invest: React.FC<InvestProps> = ({ title, subtitle, buttonText }) => {
  return (
    <div className="max-w-lg mx-auto md:bg-white shadow-md rounded p-2 md:p-6 space-y-4 bg-slate-100">
      <h2 className="text-3xl font-bold mb-4 font-space_grotesk">
        Invest in {title}
      </h2>

      <div className="space-y-[2px]">
        <label className="form-label inline-block mb-2 text-gray-700">
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
              focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none
            "
            placeholder="10"
          />
          <p> = </p>
          <div className="flex justify-between items-center border rounded-[5px] w-4/5">
            <div className="flex-1">
              <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">
                USD
              </p>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-lg px-3 py-2 rounded-r-lg bg-gray-50 ">
                $600
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center border rounded-[5px]">
        <div className="flex flex-1">
          <div className="flex-1 bg-gray-200">
            <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">
              Proyect annual Yield
            </p>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-lg px-3 py-2 bg-gray-100 rounded-r-lg">
              6%
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center border rounded-[5px]">
        <div className="flex flex-1">
          <div className="flex-1 bg-gray-200">
            <p className="text-black font-semibold text-sm px-3 py-2 rounded-l-lg h-full">
              Proyect annual Return
            </p>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-lg px-3 py-2 bg-gray-100 rounded-r-lg">
              $5000
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00000081]"
        >
          I confirm that I have read and agree to the Terms of Use, Risk
          Disclaimers, and Privacy Notice.
        </label>
      </div>

      {/* <button className="bg-teal-500 text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex w-full items-center justify-center font-space_grotesk">
        {buttonText}
      </button> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full bg-teal-500 text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk"
          >
            Invest Now!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-6 bg-white">
          <DialogHeader>
            <DialogTitle>
              Waitlist! Secure your VIP pass to the pre-launch excitement.
            </DialogTitle>
            <DialogDescription>
              Reserve your spot on the waitlist for exclusive early access to
              the Libertum platform. Simply enter your email, and we make sure
              you will be among the first in line to experience and earn passive
              rental income platform when it is unveiled!
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="link" defaultValue="Write your email here" readOnly />
            </div>
            <Button
              type="submit"
              className="px-3 bg-teal-500 w-fit text-white rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk'"
            >
              Subscribe
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Invest;
