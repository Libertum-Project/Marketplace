import { Card } from '@/components/ui/card';
import { Art } from '@/types/index';

import ArtListCard from './ArtListCard';
import ArtGridCard from './ArtGridCard';

type Props = {
  viewType?: string;
  investmentDetail?: boolean;
  artPiece: Art;
};

export const ArtCard: React.FC<Props> = ({ artPiece, viewType = 'grid', investmentDetail }) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType === 'grid' ? (
        <ArtGridCard artPiece={artPiece} investmentDetail={investmentDetail} />
      ) : (
        <ArtListCard artPiece={artPiece} investmentDetail={investmentDetail} />
      )}
    </Card>
  );
};
