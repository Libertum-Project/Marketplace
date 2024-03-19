// PropertyFeatures.tsx
import React from 'react';
import Documents from './Documents';
import Financials from './Financials';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"



const PropertyFeatures: React.FC = () => {
  return (
    <div className="property-features">
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} >
        <AccordionItem value="item-1" >
          <AccordionTrigger className="font-space_grotesk text-xl font-bold" 
          > Description
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />

          </AccordionTrigger>
          <AccordionContent>
            <div className='max-w-[624px]'>
            <p>
            At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.
            </p>
            
            <p>
            Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.
            </p>

            <p>
            Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii.
            </p>
            </div>          
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-space_grotesk text-xl font-bold"> Financials
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />

          </AccordionTrigger>
          <AccordionContent>
          <div className='max-w-[624px]'>
            <Financials />
          </div>
          
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-space_grotesk text-xl font-bold"> Documents
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />

          </AccordionTrigger>
          <AccordionContent>
            <div className='max-w-[624px]'>
            <Documents />
            </div>          
          </AccordionContent>
        </AccordionItem>
      </Accordion>
           
    </div>
  );
};

export default PropertyFeatures;
