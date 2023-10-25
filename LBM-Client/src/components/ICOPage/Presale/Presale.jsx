import React from 'react';
import logo from '../../../assets/Libertum-logo.png';


function LbmPresale() {
    return (
        <div className="bg-cover bg-center p-3 pl-8 text-white  bg-gray-800 h-[680px] pt-20 border-t border-b" >
            <div className='flex'>
                <div className=''>
                    <div className='absolute -z-1'>
                        <img src={logo} alt="" className='h-[600px] opacity-10 lg:ml-[100%] md:ml-[30%]' />
                    </div>
                    <h1 className="text-5xl font-bold mb-6 text-left font-fb text-orange-400">Join the LBM presale</h1>
                    <p className="text-xl mb-8 text-left lg:w-[40%] md:w-[60%] lg:mt-10 leading-9">
                        Participate effortlessly using BTC, ETH, BNB, USDC, USDT, XRP or ADA from your web3 compatible wallet. After the public sale, easily claim your $LBM tokens through our dedicated claim page. Don't pass up this incredible chance to get involved in fractionalized rental income tokenisation.
                    </p>
                    <div className='text-left'>
                        <button className="bg-orange-400 hover:bg-red-600 px-6 py-2 rounded-md transition duration-300">Learn More</button>
                    </div>
                </div>


                <div className=' absolute lg:ml-[950px] lg:mt-16 md:mt-16 md:ml-[450px] hidden md:block '>
                    <svg width="240" height="240" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0008 0.0864258C9.99468 0.0864258 0.261719 9.81939 0.261719 21.8255C0.261719 33.8317 9.99468 43.5647 22.0008 43.5647C34.007 43.5647 43.7399 33.8317 43.7399 21.8255C43.7262 9.82508 34.0013 0.100168 22.0008 0.0864258ZM32.8706 26.4838C32.8664 29.9127 30.088 32.6911 26.6595 32.6949V34.2478C26.6595 35.1055 25.9639 35.8007 25.1066 35.8007C24.2489 35.8007 23.5537 35.1055 23.5537 34.2478V32.6949H20.4484V34.2478C20.4484 35.1055 19.7528 35.8007 18.8955 35.8007C18.0378 35.8007 17.3426 35.1055 17.3426 34.2478V32.6949H12.6844C11.8267 32.6949 11.1315 31.9997 11.1315 31.1424C11.1315 30.2847 11.8267 29.5895 12.6844 29.5895H14.2368V14.0615H12.6844C11.8267 14.0615 11.1315 13.3664 11.1315 12.5086C11.1315 11.6509 11.8267 10.9557 12.6844 10.9557H17.3426V9.40332C17.3426 8.54561 18.0378 7.85043 18.8955 7.85043C19.7532 7.85043 20.4484 8.54561 20.4484 9.40332V10.9557H23.5537V9.40332C23.5537 8.54561 24.2489 7.85043 25.1066 7.85043C25.9643 7.85043 26.6595 8.54561 26.6595 9.40332V10.9557C30.0752 10.9415 32.8559 13.6985 32.8706 17.1143C32.8782 18.923 32.0939 20.6446 30.724 21.8255C32.0811 22.9932 32.8645 24.693 32.8706 26.4838Z" fill="#FFAB2D" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default LbmPresale;
