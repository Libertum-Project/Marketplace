import Link from 'next/link';
import { ServerImage } from '@/components/shared/ServerImage';

const page = () => {
  return (
    <div className="flex flex-col bg-black bg-opacity-10 min-h-screen">
      <section className="w-full bg-libertumOrange flex flex-col lg:flex-row justify-between lg:items-center px-8 py-4 gap-4">
        <p className="text-white  font-montserrat text-base ">
          Ready to unlock the potential of your property with Libertum?
        </p>
        <Link
          href="https://hxkq12thsyn.typeform.com/to/R09PmFMD?typeform-source=www.google.com"
          className="w-fit flex px-3 py-2 justify-center items-center border border-white rounded-[.2rem] text-white font-space_grotesk hover:bg-white hover:bg-opacity-20 "
        >
          List Property
        </Link>
      </section>
      <div className="px-4 py-3 lg:px-8 lg:py-6 space-y-6">
        <h2 className="font-space_grotesk text-left text-3xl font-semibold">List a property</h2>
        <p className="font-montserrat text-base opacity-80">
          Libertum makes selling equity in your property seamless and cost-effective, with a low fee of just 3%. Say
          goodbye to the hassle of dealing with banks, lenders, agents, title companies, and closing costs. Our process
          is incredibly simple and fast—we've launched properties within the same week of the initial call with an
          owner, all facilitated by our premium white-glove service.
        </p>
        <p className="font-montserrat text-base opacity-80">
          To get started, complete this{' '}
          <Link
            href="https://hxkq12thsyn.typeform.com/to/R09PmFMD?typeform-source=www.google.com"
            className="font-semibold underline text-libertumGreen"
          >
            brief survey
          </Link>{' '}
          with information about your property.
        </p>

        <h4 className="text-xl font-space_grotesk ">Here's how it works:</h4>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col p-4 items-center gap-6 self-stretch border border-libertumGreen rounded-[.2rem] w-full lg:w-[20rem]">
            <ServerImage src="/assets/inspection.svg" alt="icon inspection" width={80} height={80} />
            <h2 className="text-center font-space_grotesk font-semibold text-base"> Inspection and Appraisal</h2>
            <p className="font-montserrat text-sm text-left text-opacity-80">
              We arrange a comprehensive inspection and appraisal for your property.
            </p>
          </div>
          <div className="flex flex-col p-4 items-center gap-6 self-stretch border border-libertumGreen rounded-[.2rem]  w-full lg:w-[20rem]">
            <ServerImage src="/assets/transfer.svg" alt="icon inspection" width={80} height={80} />
            <h2 className="text-center font-space_grotesk font-semibold text-base"> Deed Transfer</h2>
            <p className="font-montserrat text-sm text-left text-opacity-80">
              Transfer your deed to a trust we create for you. All properties on Libertum are held in individual trusts
              with the same structure.
            </p>
          </div>
          <div className="flex flex-col p-4 items-center gap-6 self-stretch border border-libertumGreen rounded-[.2rem] w-full lg:w-[20rem]">
            <ServerImage src="/assets/listings.svg" alt="icon inspection" width={80} height={80} />
            <h2 className="text-center font-space_grotesk font-semibold text-base">Marketplace Listing</h2>
            <p className="font-montserrat text-sm text-left text-opacity-80">
              We build a custom property page on our marketplace, allowing you to sell equity to thousands of investors
              immediately.
            </p>
          </div>
        </div>

        <p className="font-montserrat text-base opacity-80">
          For instance, if you sell 20% of your equity, you retain 80% ownership and receive 80% of the rental income.
          You even have the option to buy back your equity.
        </p>
        <p className="font-montserrat text-base opacity-80">
          If you manage your property, you can continue to do so and charge investors a management fee of your choice.
        </p>
        <p className="font-montserrat text-base opacity-80">
          Ready to unlock the potential of your property with Libertum? Start by completing{' '}
          <Link
            href="https://hxkq12thsyn.typeform.com/to/R09PmFMD?typeform-source=www.google.com"
            className="font-semibold underline text-libertumGreen"
          >
            our survey
          </Link>{' '}
          today!
        </p>
      </div>
    </div>
  );
};

export default page;
