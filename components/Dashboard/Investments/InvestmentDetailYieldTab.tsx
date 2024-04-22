import { TabsContent } from '@/components/ui/tabs';
import ClaimSection from './ClaimSection';

const InvestmentDetailYieldTab = ({propertyAddress} :any) => {
  return (
    <TabsContent value="yield" className="sm:max-h-[640px] overflow-auto">
      <ClaimSection propertyAddress={propertyAddress}/>
    </TabsContent>
  );
};

export default InvestmentDetailYieldTab;
