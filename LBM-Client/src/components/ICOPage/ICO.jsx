import React from 'react'
import logo from '../../assets/Libertum-logo.png';
import certik from '../../assets/certik.png'
import LbmPresale from './Presale/Presale';
import HowToBuy from '../Buy/HowToBuy';
import HowToClaim from './HowToClaim/HowToClaim';
import TokenSaleStages from './tokenSaleStages/TokenSaleStages';
import LBMBenefits from './BenefitsOfLBM/BenefitsOfLBM';
import Tokenomics from './Tokenomics/tokenomics';
import Roadmap from './Roadmap/Roadmap';
import Faq from './Faq/Faq';
import Vesting from './Vesting/VestingPeriod';

const ICO = () => {

    return (
        <>

            <div>
                <section className="text-gray-600 body-font pt-4 bg-gray-800 lg:h-[720px] md:h-auto mt-24 h-[1240px] ">
                    <div className='absolute -z-1'>
                        <img src={logo} alt="" className='h-[650px] opacity-10 md:ml-10' />
                    </div>
                    <div className="relative z-1 mx-auto container block lg:flex lg:pb-24 md:flex-row items-center lg:-mt-10 ">
                        <div className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-40">
                            <h1 className="text-3xl md:text-5xl mb-4 lg:-mt-44 -mt-20  text-white font-fb font-bold">
                                Transforming an Exclusive Market into an Inclusive <span className='bg-gradient-to-r from-blue-600 to-lime-400 text-transparent bg-clip-text'>Opportunity for Everyone</span>
                                <span className="hidden lg:inline-block pt-4" >Get Your $LBM Tokens Now!</span>
                            </h1>
                            <p className="mb-8 leading-relaxed md:text-xl text-gray-400 text-sm ">Don't miss out on your chance to be a part of the inclusive revolution in the real estate market. Start earning a steady rental income every month, hassle-free, and without any additional maintenance costs.</p>
                            <p className="mb-8 leading-relaxed md:text-xl text-gray-400 text-sm px-2">By purchasing $LBM tokens, you are joining a movement that seeks to democratise and transform the landscape of fractionalised rental income investments. join us in creating a more inclusive world for all.</p>
                            <img src={certik} alt="" className='rounded-2xl md:w-40 w-24' />
                        </div>
                        <div className=" shadow-2xl rounded-3xl md:mt-20 lg:-mr-[74px] px-5 md:px-0 -mt-10">
                            <div className='bg-gray-800 text-white p-5 text-center rounded-t-3xl'>
                                <h1 className='text-xl md:text-2xl text-amber-300 mb-3'>BUY NOW BEFORE PRICE INCREASED</h1>
                                <p className='font-semibold text-lg mb-3' >Next Phase Price: $0.028</p>
                                <button className='bg-cyan-600 md:px-20 px-10  md:py-2 rounded-3xl mb-2'>SOLD 2,498,846/5,000,000 $LBM TOKEN </button>
                                <p className='mb-2'>USD Raised : $60,001 / $120,000</p>
                                <button className='bg-orange-400 px-4  md:py-2 rounded-3xl '>40% Discounted Community Sale ends soon, hurry up ⌛️</button>
                            </div>

                            <div className='bg-white text-center rounded-b-2xl md:pt-10 '>
                                <h1 className='md:text-3xl text-2xl pt-2  font-bold pb-1'>Community Sale</h1>
                                <h3>1 $LBM Token = 0.024 </h3>
                                <div className='block md:flex md:justify-around lg:pt-2 px-6 py-1 text-left '>
                                    <div className='md:px-2 '>
                                        <p className='md:mb-3 text-sm'>Amount of USD you pay</p>
                                        <div className='flex bg-gray-300 rounded-lg lg:w-[130px] md:w-[200px] mx-auto '>
                                            <input type="text" placeholder='0' className='py-3 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                            <h2 className='font-bold  md:pr-4 mt-2'>USD</h2>
                                        </div>
                                    </div>
                                    <div className='md:px-2'>
                                        <p className='md:mb-3 text-sm '>Amount of USD you Recieve</p>
                                        <div className='flex rounded-lg bg-gray-300 lg:w-[130px] md:w-[200px] mx-auto'>
                                            <input type="text" placeholder='0' className='py-2 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                            <h2 className='font-bold md:pr-4 mt-2'>USD</h2>
                                        </div>
                                    </div>
                                </div>
                                <button className='text-xl md:px-32 px-12 mt-2  md:mt-8 mb-5 font-semibold lg:py-2 py-2 rounded-2xl bg-cyan-600 text-black md:py-4'>Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                <LbmPresale />
                <HowToBuy/>
                <HowToClaim/>
                <TokenSaleStages/>
                <Tokenomics/>
                <Vesting/>
                <LBMBenefits/>
                <Roadmap/>
                <Faq/>
        </>
    )
}

export default ICO