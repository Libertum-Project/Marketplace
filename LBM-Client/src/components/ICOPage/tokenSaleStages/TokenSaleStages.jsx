import React from 'react';

function TokenSaleStages() {
    return (
        <div className="bg-gray-800 p-12 px-6 border-t border-b">
            <h1 className="text-3xl mb-6 font-bold text-center text-orange-400">Token Sale Stages</h1>

            <div className="md:flex flex-wrap md:justify-around py-16">
                <StageCard
                    title="Private Round : End at 15 November 2023​"
                    discount="-99%"
                    price="$ 0.0018"
                    totalSale="12,500,000"
                    perStageMin="$ 22,500"
                    buttonText="Sold Out"
                    buttonColor="bg-gray-400 cursor-not-allowed"
                />
                <StageCard
                    title="Whitelist Presale Round : 15 - 20 January 2024​"
                    discount="-83%"
                    price="$ 0.0020"
                    totalSale="87,500,000"
                    perStageMin="$ 175,000"
                    buttonText="Buy now"
                    buttonColor="bg-green-500 hover:bg-green-600"
                />
                <StageCard
                    title="Public Presale Round : 25 – 30 January 2024​"
                    discount="-75%"
                    price="$ 0.0025"
                    totalSale="120,000,000"
                    perStageMin="$ 300,000"
                    buttonText="Coming Soon"
                    buttonColor="bg-gray-400 cursor-not-allowed"
                />

                <StageCard
                    title="Launch Date: 1 February 2024​"
                    discount="-75%"
                    price="$ 0.0025"
                    totalSale="120,000,000"
                    perStageMin="$ 300,000"
                    buttonText="Coming Soon"
                    buttonColor="bg-gray-400 cursor-not-allowed"
                />
            </div>

            <p className="text-center mt-6 italic text-gray-400">
                *Each stage concludes when either all of the available tokens are sold out or when the designated time period has ended.
            </p>
        </div>
    );
}

const StageCard = ({ title, discount, price, totalSale, perStageMin, buttonText, buttonColor }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-bl-3xl rounded-tr-3xl shadow-md lg:w-1/5 md:w-[40%] mb-5 lg:mb-0">
            <h2 className=" font-semibold mb-4 text-cyan-600 leading-8">{title}</h2>
            <div className="bg-orange-500 text-white rounded-full mb-4 absolute -mt-28  -ml-8">{discount}</div>
            <p><strong>Price starts from:</strong> {price}</p>
            <p><strong>Total for sale:</strong> {totalSale}</p>
            <p><strong>Per Stage min. ($):</strong> {perStageMin}</p>
            <button className={`mt-2 px-4 rounded-br-xl rounded-tl-xl text-white bg-orange-400  ${buttonColor}`}>{buttonText}</button>
        </div>
    );
}

export default TokenSaleStages;
