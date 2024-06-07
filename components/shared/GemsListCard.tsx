'use client';
import { Gem } from '@/types/index';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ServerImage } from './ServerImage';
import { Button } from '@/components/ui/button';

interface Props {
  gem: Gem;
  investmentDetail?: boolean;
}

const GemsListCard: React.FC<Props> = ({ gem, investmentDetail }) => {
  return (
    <Card className="bg-white h-fit rounded-[5px] shadow-[0_4px_20px_0px_rgba(0, 6, 47, 0.05) border border-opacity-10 hover:border-[#00B3B5] overflow-hidden flex flex-row">
      <div className="w-1/3">
        <ServerImage
          className="w-full"
          src={gem.image}
          alt={gem.name}
          width={150}
          height={150}
          style={{
            height: '100%',
          }}
        />
      </div>

      <CardContent className="p-4 w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{gem.name}</p>
          <p className="mt-2 text-sm text-gray-600"></p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="px-4 py-1 bg-libertumGreen bg-opacity-10 rounded-[50px] border border-libertumGreen font-space_grotesk text-libertumGreen text-xs font-bold">
            ${gem.pricePerGram} /g
          </p>
          {investmentDetail && (
            <Button variant="outline" className="ml-4">
              More
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GemsListCard;
