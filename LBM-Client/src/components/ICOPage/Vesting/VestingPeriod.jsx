import React from 'react';

function Vesting() {
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
        <div className="bg-gray-800 p-8 shadow-md border-t border-b hidden md:block">
            <h1 className="text-2xl mb-6 font-bold text-orange-400">We believe in  conservative approach to ensure price stability. Only a small (but significant) percentage of $LBM will be unlocked at the token generation event. This means that $LBM will enjoy stability and reputational excellence. ​</h1>

            <table className="w-[60%] table-fixed mx-auto">
                <thead>
                    <tr className='bg-[#527BC4] text-white'>
                        <th className=" px-4 border-r-2 border-b-2">Allocation</th>
                        <th className="w-[60px] border-r-2  border-b-2">%</th>
                        <th className=" px-2 w-[150px] border-r-2  border-b-2">Token Amount</th>
                        <th className="px-4  border-b-2">Vesting</th>
                    </tr>
                </thead>
                <tbody>
                    {allocations.map((allocation, index) => (
                        <tr key={index} className="bg-white border-b leading-5">
                            <td className="px-4 bg-[#527BC4] text-white text-left font-semibold">{allocation.name}</td>
                            <td className={`w-[20px]  bg-${allocation.bg} border`}>{allocation.percentage}</td>
                            <td className={` bg-${allocation.bg} border`}>{allocation.amount}  </td>
                            <td className={`h-10 text-left px-2  bg-${allocation.bg} text-sm`}>{allocation.vesting}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Vesting;
