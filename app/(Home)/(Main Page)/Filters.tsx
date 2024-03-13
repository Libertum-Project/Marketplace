import { type ReactElement } from "react";
import { ServerImage } from "@/components/shared/ServerImage";

export function Filters(): ReactElement {

  const selectOptions:  { imageURL: string; label: string; options: string[] }[]  = [
    {
      imageURL: '/assets/filter1.svg',
      label:'Property Type',
      options: [
        'All property types',
        'Commercial'
      ]
    },
    {
      imageURL: '/assets/filter2.svg',
      label:'Location',
      options: [
        'Worldwide'      
      ]
    },  
    {
      imageURL: '/assets/filter3.svg',
      label:'Rental Yield',
      options: [
        'Up to  5%',
        '5% to 10%',
        '10% to 15 %'
      ]
    }
  ]
  
  return (
    <div className="flex flex-col align-start gap-2 self-stretch max-w-[95%] relative top-[-3rem] mb-[-1rem] p-2 z-30 shadow-sm bg-white border md:top-[-1.8rem] md:flex-row md:px-8 md:py-6 justify-between md:align-center md:min-w-[75rem] md:max-w-[75rem] m-auto rounded-[5px]">

      {selectOptions.map((option, index) => (
        <div key={index} className="w-full justify-between flex align-center md:gap-4 md:justify-center md:w-none">
          <div className="flex font-space_grotesk text-base font-bold justify-center items-center">
            <ServerImage
              src={option.imageURL}
              alt="N"
              width="18"
              height="18"
              className="mr-3"
            />
            <p className='w-fit'>{option.label}</p>
          </div>
          <select className="flex w-[200px] border rounded-[5px]">
            {option.options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}  
      
      <div className="flex bg-[#00B3B5] rounded-[5px] px-4 justify-center gap-4">
        <p className="md:hidden text-white font-space_grotesk font-bold">Search Properties </p>
          <ServerImage
              src="/assets/magnifying.svg"
              alt="N"
              width="30"
              height="30"
              className="md:w-[60px]"
            />
      </div>
    </div>
  )
};