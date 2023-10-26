import React from 'react';
import { Chart } from './Chart';


function Tokenomics() {

    const allocations = [
        { name: 'Treasury Reserve', percentage: '27%', amount: '54,000,000', vesting: '0% Unlock at launch, usage will be consult with community', bg: 'gray-200' },
        { name: 'Core Team', percentage: '25%', amount: '54,000,000', vesting: '0% Unlock at launch, 12 month cliff and linearly over 48 months', bg: 'customGray' },
        { name: 'WL Presale', percentage: '15%', amount: '30,000,000', vesting: '10% Unlock at launch', bg: 'gray-200' },
        { name: 'Public Presale', percentage: '15%', amount: '30,000,000', vesting: '10% Unlock at launch', bg: 'customGray' },
        { name: 'Liquidity', percentage: '5%', amount: '10,000,000', vesting: '10% Unlock at launch', bg: 'gray-200' },
        { name: 'Staking Reward', percentage: '4%', amount: '8,000,000', vesting: 'Locked until place in the staking pool', bg: 'customGray' },
        { name: 'Ambassador Program', percentage: '3%', amount: '6,000,000,', vesting: '0% Unlock at launch, 6 month cliff and linearly over 24 months', bg: 'gray-200' },
        { name: 'Marketing', percentage: '2%', amount: '4,000,000', vesting: '0% Unlock at launch, 6 month cliff and linearly over 24 months', bg: 'customGray' },
        { name: 'Air Drop', percentage: '1%', amount: '2,000,000', vesting: '10% Unlock at launch, 1 month cliff ', bg: 'gray-200' },
        { name: 'Advisors', percentage: '1%', amount: '2,000,000', vesting: '10% Unlock at launch, 6 month cliff and linearly over 36 months', bg: 'customGray' },
        { name: 'Private Sale', percentage: '1%', amount: '8,000,000', vesting: '10% Unlock at launch', bg: 'gray-200' },
        { name: 'Project Development', percentage: '1%', amount: '8,000,000', vesting: '10% Unlock at launch', bg: 'customGray' },

    ];


    return (
        <div className="bg-gray-800 p-8 shadow-md border-t ">
            <h1 className="text-3xl mb-6 font-bold text-orange-400 py-5">Allocation of $LBM Tokens</h1>

            <div className='lg:flex lg:justify-around mx-auto rounded-xl'>
                <table className="lg:w-[55%] mx-auto -ml-2 md:ml-0 rounded-lg">
                    <thead className=''>
                        <tr className='bg-[#527BC4] text-white '>
                            <th className=" px-4 border-r-2 border-b-2 ">Allocation</th>
                            <th className="lg:w-[60px] border-r-2  border-b-2">%</th>
                            <th className=" px-2 lg:w-[150px] border-r-2  border-b-2">Token Amount</th>
                            <th className="lg:px-4  border-b-2">Vesting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allocations.map((allocation, index) => (
                            <tr key={index} className="bg-white border-b leading-5">
                                <td className="lg:px-4 pl-1 bg-[#527BC4] text-white text-left font-semibold">{allocation.name}</td>
                                <td className={`lg:w-[20px]  bg-${allocation.bg} border`}>{allocation.percentage}</td>
                                <td className={` bg-${allocation.bg} border`}>{allocation.amount}  </td>
                                <td className={`h-10 text-left px-2  bg-${allocation.bg} text-sm`}>{allocation.vesting}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='lg:w-[38%] md:w-[60%] mx-auto'>
                    <Chart />
                    <h1 className='font-bold lg:mt-[-48%] md:absolute lg:relative md:mt-[-25%] md:ml-[20%] lg:ml-0 text-xl leading-8 text-white'>$LBM 
                       <br /> Allocatiom %</h1>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
