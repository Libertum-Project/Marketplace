import { Card } from '@/components/ui/card';

import PropertyListView from './PropertyListView';
import PropertyGridView from './PropertyGridView';
interface Props {
  property: any;
  viewType?: string;
  btnTitle?: string;
  btnLink?: string;
  investmentDetail?: boolean;
  isTest?: boolean;
}

const PropertyCard = ({ property, viewType = 'grid', btnTitle, investmentDetail, isTest }: Props) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType == 'grid' ? (
        <PropertyGridView property={property} btnTitle={btnTitle} investmentDetail={investmentDetail} isTest={isTest}/>
      ) : (
        <PropertyListView property={property} />
      )}
    </Card>
  );
};

export default PropertyCard;
