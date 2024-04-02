import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServerImage } from '@/components/shared/ServerImage';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import DatePicker from '@/components/shared/DatePicker';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const page = () => {
  return (
    <div className="w-full items-center">
      <Tabs defaultValue="info">
        <div className="flex justify-center mt-10">
          <div className="w-auto">
            <TabsList className="grid w-full grid-cols-3 bg-gray-950 bg-opacity-5 rounded-[58px]">
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <TabsTrigger
                      disabled
                      value="verify"
                      className="border-0 data-[state=active]:rounded-[80px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-white"
                    >
                      Get Verified
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon..</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TabsTrigger
                value="info"
                className="border-0 data-[state=active]:rounded-[80px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-white"
              >
                Basic Information
              </TabsTrigger>

              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <TabsTrigger
                      disabled
                      value="auth"
                      className="border-0 data-[state=active]:rounded-[80px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-white"
                    >
                      2-Factor Auth
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon..</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TabsList>
          </div>
        </div>

        <div className="p-5">
          <div className="rounded-[5px] border border-zinc-200 px-10 py-7 max-sm:px-5 max-sm:py-4">
            <TabsContent value="verify">
              <div>Verify</div>
            </TabsContent>
            <TabsContent value="info">
              <div className="flex gap-10">
                <div className="max-sm:hidden">
                  <ServerImage
                    alt="avatar"
                    src="/assets/icons/avatar.svg"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-7">
                  <div className="flex gap-7">
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        type="text"
                        placeholder="First Name"
                        id="fname"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        id="lname"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="flex gap-7">
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <DatePicker />
                    </div>
                  </div>

                  <div className="flex gap-7">
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="present-address">Address</Label>
                      <Input
                        type="text"
                        placeholder="Present Address"
                        id="present-address"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>

                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        type="text"
                        placeholder="City"
                        id="city"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="flex gap-7">
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input
                        type="text"
                        placeholder="Postal code"
                        id="postal-code"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <Label htmlFor="county">Country</Label>
                      <Input
                        type="text"
                        placeholder="Country"
                        id="country"
                        className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-teal-500 rounded-[5px] text-white text-center hover:bg-teal-500 min-w-[164px] max-sm:w-full">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auth">
              <div>2- Factor Auth</div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default page;
