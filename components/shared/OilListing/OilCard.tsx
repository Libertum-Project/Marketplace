import { Card } from '@/components/ui/card';
import { Oil } from '@/types/index';

import { OilListCard } from './OilListCard';
import { OilGridCard } from './OilGridCard';

type Props = {
  viewType?: string;
  investmentDetail?: boolean;
  oil: Oil;
}

export const OilCard: React.FC<Props> = ({ oil, viewType = 'grid', investmentDetail }) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType === 'grid' ? (
        <OilGridCard oil={oil} investmentDetail={investmentDetail} />
      ) : (
        <OilListCard oil={oil} investmentDetail={investmentDetail} />
      )}
    </Card>
  );
};
