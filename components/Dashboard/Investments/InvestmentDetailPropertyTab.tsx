import { ChevronDownIcon } from '@radix-ui/react-icons';

import { TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ServerImage } from '../../shared/ServerImage';
import { Property } from '@/types';
interface props {
  property: Property;
}

const InvestmentDetailPropertyTab = ({ property }: props) => {
  const projectedRentalYield = property.annualYield / 100;
  const tokenPrice = 50;
  const annualIncomePerToken = tokenPrice * projectedRentalYield;
  const monthlyIncomePerToken = annualIncomePerToken / 12;
  const annualCapitalRepaymentPerToken =
    ((property.totalValuation / property.listingDurationMonths) * 12) / property.totalShares;
  const monthlyCapitalRepayment = annualCapitalRepaymentPerToken / 12;
  const monthlyReturnPerToken = monthlyIncomePerToken + monthlyCapitalRepayment;
  const annualReturnPerToken = annualIncomePerToken + annualCapitalRepaymentPerToken;
  return (
    <TabsContent value="property">
      <div className="mt-16">
        <div className="flex justify-between gap-9 mb-8">
          <div className="bg-white rounded-[5px] shadow-main-shadow py-5 px-6 w-[50%] max-sm:w-full">
            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Token Price</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $
                {tokenPrice.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Ammount of Tokens</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">-</p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Property Price:</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                ${(property.totalValuation).toLocaleString('en-US')}
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Yield</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                {property.annualYield} %
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Total Tokens</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                {property.totalShares.toLocaleString('en-US')}
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">Repayment Term:</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                {property.listingDurationMonths} months
              </p>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-[5px] shadow-main-shadow py-5 px-6 flex flex-col gap-8 justify-center max-sm:hidden">
            <div className="flex items-center gap-2">
              <ServerImage src="/assets/icons/investment-details/area.svg" alt="amenity" width={32} height={32} />
              <p className="text-black text-opacity-80 text-xs font-light">500 Square Foot</p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage src="/assets/icons/investment-details/parking.svg" alt="amenity" width={32} height={32} />
              <p className="text-black text-opacity-80 text-xs font-light">on-site Parking</p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage
                src="/assets/icons/investment-details/swimming-pool.svg"
                alt="amenity"
                width={32}
                height={32}
              />
              <p className="text-black text-opacity-80 text-xs font-light">Swimming Pool</p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage src="/assets/icons/investment-details/gym.svg" alt="amenity" width={32} height={32} />
              <p className="text-black text-opacity-80 text-xs font-light">Gymnasium</p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white rounded-[5px] shadow-main-shadow p-5 py-2">
          <AccordionItem value="more" className="border-0">
            <AccordionTrigger>
              More
              <ChevronDownIcon className="group-data-[state=open]:rotate-180" aria-hidden />
            </AccordionTrigger>
            <AccordionContent className="flex justify-between gap-7">
              <div className="bg-white rounded-[5px] py-5 px-6 w-[50%]">
                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Monthly Income per Token</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    ${monthlyIncomePerToken}
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Annual Income per Token</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    $ {annualIncomePerToken}
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Annual Capital Repayment per Token</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    ${annualCapitalRepaymentPerToken.toLocaleString('en-US')}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[5px] py-5 px-6 w-[50%]">
                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Monthly Capital Repayment</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    ${monthlyCapitalRepayment.toLocaleString('en-US')}
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Monthly Return per Token</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    ${monthlyReturnPerToken.toLocaleString('en-US')}
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">Annual Return per Token</p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    ${annualReturnPerToken}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </TabsContent>
  );
};

export default InvestmentDetailPropertyTab;
