import { Card } from '@/components/ui/card';
import PropertyListView from './PropertyListView';
import PropertyGridView from './PropertyGridView';
interface Props {
  property: any;
  viewType?: string;
  btnTitle?: string;
  btnLink?: string;
}

const PropertyCard = ({ property, viewType = 'grid' }: Props) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow border border-black border-opacity-10 ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType == 'grid' ? (
        <PropertyGridView property={property} />
      ) : (
        <PropertyListView property={property} />
      )}
    </Card>
  );
};

export default PropertyCard;
