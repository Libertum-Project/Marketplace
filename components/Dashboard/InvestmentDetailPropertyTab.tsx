import { TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ServerImage } from '../shared/ServerImage';

const InvestmentDetailPropertyTab = () => {
  return (
    <TabsContent value="property" className="sm:max-h-[550px] overflow-auto">
      <div className="mt-16">
        <div className="flex justify-between gap-9 mb-8">
          <div className="bg-white rounded-[5px] shadow py-5 px-6 w-[50%] max-sm:w-full">
            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">RIT's</p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                5
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">
                Rent Earned
              </p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $0.5
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">
                Total Price
              </p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $3.4560390
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">
                Value Held
              </p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $4.01
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">
                Rent / Year
              </p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $50
              </p>
            </div>

            <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
              <p className="text-neutral-700 text-[15px] font-normal">
                Proportion
              </p>
              <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                $0.045%
              </p>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-[5px] shadow py-5 px-6 flex flex-col gap-8 justify-center max-sm:hidden">
            <div className="flex items-center gap-2">
              <ServerImage
                src="/assets/icons/investment-details/area.svg"
                alt="amenity"
                width={32}
                height={32}
              />
              <p className="text-black text-opacity-80 text-xs font-light">
                500 Square Foot
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage
                src="/assets/icons/investment-details/parking.svg"
                alt="amenity"
                width={32}
                height={32}
              />
              <p className="text-black text-opacity-80 text-xs font-light">
                on-site Parking
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage
                src="/assets/icons/investment-details/swimming-pool.svg"
                alt="amenity"
                width={32}
                height={32}
              />
              <p className="text-black text-opacity-80 text-xs font-light">
                Swimming Pool
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ServerImage
                src="/assets/icons/investment-details/gym.svg"
                alt="amenity"
                width={32}
                height={32}
              />
              <p className="text-black text-opacity-80 text-xs font-light">
                Gymnasium
              </p>
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-[5px] shadow p-5 py-2"
        >
          <AccordionItem value="more" className="border-0">
            <AccordionTrigger>
              More
              <ChevronDownIcon
                className="group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </AccordionTrigger>
            <AccordionContent className="flex justify-between gap-7">
              <div className="bg-white rounded-[5px] py-5 px-6 w-[50%]">
                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    RITs Issues
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    5
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    Price / RIT
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    $0.34
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    Rent / RIT
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    $0.34
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[5px] py-5 px-6 w-[50%]">
                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    Gross Rent
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    5
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    Net Rent
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    $0.34
                  </p>
                </div>

                <div className="flex justify-between pb-2 pt-2 border-b-2 border-b-[#ECECEC]">
                  <p className="text-neutral-700 text-[15px] font-normal">
                    Expected Yield
                  </p>
                  <p className="text-right text-neutral-700 text-base font-bold font-space_grotesk">
                    $0.34
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
