import React from 'react';
import logo from '../../../assets/Libertum-logo.png';

function LBMBenefits() {
    return (
        <div className="bg-gray-800 p-12 lg:px-20 px-5  shadow-md">
            <div className='absolute -z-1'>
                <img src={logo} alt="" className='h-[600px] opacity-10 md:ml-[30%]' />
            </div>
            <h1 className="text-4xl mb-6 font-bold text-orange-400 ">Benefits of $LBM Token</h1>

            <p className="text-2xl mb-6 text-white text-left ">
                $LBM is the Libertum native token, it is the bricks that will build a strong foundation for the Libertum community.
            </p>

            <p className="text-xl mb-6 text-gray-50 text-left">
               - The $LBM token is how we will both raise funds and give back funds to you, our community. There are three primary ways in how this will be achieved:
            </p>

            <ol className="list-disc list-inside mb-6 pl-6 text-left text-cyan-600">
                <li className="mb-4">
                    $LBM will allow everyone to earn their share of the platform revenue. By staking the $LBM, the community can earn their reward in both $LBM and $USDC
                </li>
                <li className="mb-4">
                    VIP $LBM holders who stake at 10k of $LBM tokens (8000$) will receive a 1% reduction in the buying fee for real estate
                </li>
                <li className="mb-4">
                    Reinvest $LBM in our fractionalized rental income (RIT) eco system to earn additional passive income
                </li>
            </ol>

            <p className="text-xl mb-6 text-red-500">
                We will be giving to non-profit organizations that help millions globally to create a home. As an $LBM holder, you will have the power to choose which projects we support.
            </p>
        </div>
    );
}

export default LBMBenefits;
