import { Card } from '@/components/ui/card';
import { SecurityListing } from '@/types/index';

import { SecurityListCard } from './SecurityListCard';
import { SecurityGridCard } from './SecurityGridCard';

type Props = {
  viewType?: string;
  investmentDetail?: boolean;
  security: SecurityListing;
};

export const SecurityCard: React.FC<Props> = ({ security, viewType = 'grid', investmentDetail }) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType === 'grid' ? (
        <SecurityGridCard security={security} investmentDetail={investmentDetail} />
      ) : (
        <SecurityListCard security={security} investmentDetail={investmentDetail} />
      )}
    </Card>
  );
};
