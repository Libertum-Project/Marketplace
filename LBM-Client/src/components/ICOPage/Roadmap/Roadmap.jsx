import React from 'react';

const Roadmap = () => {
    return (
        <div className="bg-gray-800 p-16 text-white border-t">
            <h1 className="text-4xl font-extrabold mb-16 text-center tracking-wide text-orange-400">ROADMAP</h1>
            <div className="lg:flex justify-between items-start relative lg:p-10 ">
                {phases.map((phase, index) => (
                    <Phase key={index} title={phase.title} tasks={phase.tasks} index={index} />
                ))}
                <div className="absolute top-1/2 left-0 right-0 border-t-2 border-blue-500 "></div>
            </div>
        </div>
    );
};

const Phase = ({ title, tasks }) => (
    <div className="lg:flex flex-col items-center relative z-10 animate-fadeIn mt-10 lg:mt-0" >

        <div className="mb-4 lg:w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-105 hover:shadow-xl">
            <span className="text-xl font-bold">{title}</span>
        </div>
        <div className="text-gray-800 p-4 rounded-lg bg-gray-200 transition-transform transform hover:-translate-y-2 shadow-lg shadow-blue-500">
            <ul>
                    {tasks.map((task, idx) => (
                        <li key={idx} className="text-sm mb-2 last:mb-0  ">{task}</li>
                    ))}
            </ul>
        </div>
    </div >
);


const phases = [
    {
        title: 'Phase 1',
        tasks: [
            'Project Concept',
            'UK Company Registration',
            'Tokenomics​',
            'MVP 1.0​',
            'Smart Contract Development​',
            'Private Sale​',
            'Community Building'
        ]
    },
    {
        title: 'Phase 2',
        tasks: [
            'Licencing​',
            'Smart Contract Audit',
            'Geo Growth',
            'Commersialize Marketplace',
            'Tokenise First Real Estate',
            'Community Events Launch',
            'Giveaway & Airdrops Launch'
        ]
    },
    {
        title: 'Phase 3',
        tasks: ['Whitelist Presale - $LBM',
            'Public Presale - $LBM', '$LBM Launch',
            'DEX Listing', 'Token Staking Pool Launch']
    },
    {
        title: 'Phase 4',
        tasks: [
            'Acquisition of the first Real Estate',
            'Consider CEX Listing',
            'Targeted to tokenise 20 Real Estates',
            'Expansion & Geo Growth',
            'Feasibility of Valuator AI'
        ]
    }
];



export default Roadmap;
