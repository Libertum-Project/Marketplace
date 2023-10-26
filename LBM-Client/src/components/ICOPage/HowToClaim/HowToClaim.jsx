import React from 'react';


function HowToClaim() {
    return (
        <div className="bg-gray-800  p-8 lg:px-12 py-10 border-t ">
            <div className=" mx-auto p-12 lg:px-20  shadow-md bg-gray-600 rounded-3xl w-full  ">

                <h1 className="text-3xl mb-6 font-bold text-orange-400">How to Claim $LBM Token</h1>

                <p className="text-xl mb-6 w-full text-gray-100">
                    As we complete all funding rounds, you'll gain the opportunity to claim your $LBM tokens effortlessly! Stay tuned for comprehensive instructions on how to claim, which will be revealed closer to the scheduled time. When the claiming process is ready, simply visit our main page at
                    <a href="https://libertum.io" className="text-blue-500 underline px-2">libertum.io</a>
                    and click on the "Claim" button. We've got you covered, and claiming your $LBM tokens will be as seamless as our investing in our fractionalised rental income model!
                </p>
                <button className='bg-orange-400 px-10  rounded-xl'>Buy Now</button>

                <h2 className="text-2xl mt-8 mb-4 font-semibold text-cyan-500">Purchase with confidence</h2>

                <p className="text-xl mb-6 text-gray-100 lg:w-[80%] text-center mx-auto">
                    Purchase with peace of mind, knowing that our $LBM token contract has undergone rigorous audits by “...”, a renowned blockchain security firm, ensuring unparalleled levels of security.
                </p>
                <div>
                    <a href="https://raw.githubusercontent.com/Libertum-Project/Website/2829a6808fe188063f490cdf257e97558bbd1c66/LBM-Client/src/components/Landing/assets/LBM-whitepaper.pdf" target='_blank' >
                        <button className='bg-gray-100 px-10  rounded-xl'>
                            White Paper
                        </button>
                    </a>
                </div>
        </div>
    );
}

export default HowToClaim;
