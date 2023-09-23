import React from 'react'
import IcoNav from './IcoNav'
import logo from '../../assets/Libertum-logo.png';
import certik from '../../assets/certik.png'

const ICO = () => {
    return (
        <div>
            <section className="text-gray-600 body-font pt-4 bg-gray-900 md:h-[700px] mt-24 h-[1100px] ">
                <div className='absolute -z-1'>
                    <img src={logo} alt="" className='h-[650px] opacity-10 md:ml-10' />
                </div>
                <div className="relative z-1 mx-auto container block md:flex pb-24 md:flex-row items-center ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-40">
                        <h1 className="text-3xl md:text-5xl mb-4 md:-mt-44 -mt-20  text-white font-fb font-bold">
                            Join The <span className='bg-gradient-to-r from-blue-600 to-lime-400 text-transparent bg-clip-text'>Green Revolution</span>
                            <br className="hidden lg:inline-block" />Get Your $TUK Token Now!
                        </h1>
                        <p className="mb-8 leading-relaxed md:text-xl text-gray-400 text-sm ">Be a part of Sustainable transportation and secure your stake in a greener future with eTukTuk's $TUK Token Presale.</p>
                        <p className="mb-8 leading-relaxed md:text-xl text-gray-400 text-sm px-2">Buy $Tuk tokens and propel the rEvolution that transforming the lanscape of transportation for the better. Act now and join us in building a more Sustainable and inclusive world for everyone</p>
                        <img src={certik} alt="" className='rounded-2xl md:w-40 w-24' />
                    </div>
                    <div className=" shadow-2xl rounded-3xl md:mt-20 md:-mr-[74px] px-5 md:px-0 -mt-10">
                        <div className='bg-gray-800 text-white p-5 text-center rounded-t-3xl'>
                            <h1 className='text-xl md:text-2xl text-amber-300 mb-3'>BUY NOW BEFORE PRICE INCREASED</h1>
                            <p className='font-semibold text-lg mb-3' >Next Phase Price: $0.028</p>
                            <button className='bg-cyan-600 md:px-20 px-10 py-1 md:py-2 rounded-3xl mb-4'>SOLD 2,498,846/5,000,000 $TUK TOKEN </button>
                            <p className='mb-4'>USD Raised : $60,001 / $120,000</p>
                            <button className='bg-orange-400 px-5 py-1 md:py-2 rounded-3xl'>40% Discounted Community Sale ends soon, hurry up ⌛️</button>
                        </div>
                        <div className='bg-white text-center rounded-b-2xl'>
                            <h1 className='md:text-4xl text-2xl pt-4 font-bold pb-3'>Community Sale</h1>
                            <h3>1 $TUK Token = 0.024 </h3>
                            <div className='block md:flex md:justify-around md:pt-5 px-6 py-2 text-left '>
                                <div className='md:px-2 '>
                                    <p className='md:mb-5 text-sm'>Amount of USD you pay</p>
                                    <div className='flex bg-gray-300 rounded-lg md:w-[130px] mx-auto '>
                                        <input type="text" placeholder='0' className='py-3 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                        <h2 className='font-bold  md:pr-4 mt-3'>USD</h2>
                                    </div>
                                </div>
                                <div className='md:px-2'>
                                    <p className='md:mb-5 text-sm '>Amount of USD you Recieve</p>
                                    <div className='flex rounded-lg bg-gray-300 md:w-[130px] mx-auto'>
                                        <input type="text" placeholder='0' className='py-3 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                        <h2 className='font-bold md:pr-4 mt-3'>USD</h2>
                                    </div>
                                </div>
                            </div>
                            <button className='text-xl md:px-32 px-12 mt-2  md:mt-8 mb-5 font-semibold py-1 rounded-2xl bg-cyan-600 text-black'>Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ICO