import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import UserForm from '@/components/Dashboard/UserForm';

const page = () => {
  return (
    <div className="w-full items-center">
      <Tabs defaultValue="info">
        <div className="flex justify-center mt-10">
          <div className="w-auto">
            <TabsList className="grid w-full grid-cols-2 bg-gray-950 bg-opacity-5 rounded-[58px]">
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
            </TabsList>
          </div>
        </div>

        <div className="p-5">
          <div className="rounded-[5px] border border-zinc-200 px-10 py-7 max-sm:px-5 max-sm:py-4">
            <TabsContent value="verify">
              <div>Verify</div>
            </TabsContent>
            <TabsContent value="info">
              <UserForm />
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
