import { Card } from '@/components/ui/card';
import GemsGridCard from './GemsGridCard';
import GemsListCard from './GemsListCard';
import { Gem } from '@/types/index';

type Props = {
  viewType?: string;
  investmentDetail?: boolean;
  gem: Gem;
}

const GemsCard: React.FC<Props> = ({ gem, viewType = 'grid', investmentDetail }) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType === 'grid' ? (
        <GemsGridCard gem={gem} investmentDetail={investmentDetail} />
      ) : (
        <GemsListCard gem={gem} investmentDetail={investmentDetail} />
      )}
    </Card>
  );
};

export default GemsCard;
