import { Card } from '@/components/ui/card';
import { Farm } from '@/types/index';

import {FarmListCard} from './FarmListCard';
import { FarmGridCard } from './FarmGridCard';

type Props = {
  viewType?: string;
  investmentDetail?: boolean;
  farm: Farm;
}

export const FarmCard: React.FC<Props> = ({ farm, viewType = 'grid', investmentDetail }) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType === 'grid' ? (
        <FarmGridCard farm={farm} investmentDetail={investmentDetail} />
      ) : (
        <FarmListCard farm={farm} investmentDetail={investmentDetail} />
      )}
    </Card>
  );
};
