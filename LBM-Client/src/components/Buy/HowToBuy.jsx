import React from "react";
import Logo from "../../assets/Libertum-logo.png";

const HowToBuy = () => {
    return (
        <div className='bg-gray-800 lg:h-[700px] h-auto'>
            <img src={Logo} alt="Under Construction" className=" mb-8 absolute -z-1 opacity-10 lg:h-[700px]" />
            <h1 className=" items-center z-10 text-4xl text-gray-200 font-fb font-semibold relative pt-4 ">How To Buy</h1>
            <div className="text-gray-400 text-center space-x-4 mt-6 lg:flex ">

                <div className="inline-block px-6 p-2 lg:w-[33%] w-[96%] text-left">
                        <span className="text-3xl font-bold">Step 1</span>
                    <h4 className=" text-sm mt-2">
                        You will need to have a web3 compatible wallet such as Metamask connected to your browser, alternatively you can also use other wallets supported by Wallet Connect, such as Trust Wallet. <br /><br />
                        <span className=''>
                        To ensure a smooth process for participating in the presale, we suggest using a desktop browser and Metamask. For mobile devices we suggest using Trust Wallet for the smoothest user experience.  .
                        </span>
                    </h4>
                </div>

                <div className="inline-block px-6 p-2 lg:w-[33%] text-left">
                        <span className="text-3xl font-bold ">Step 2</span>
                    <h6 className=" mt-2 text-sm">
                        Enter the amount you wish to purchase and click "Connect Wallet" to choose your preferred payment option for acquiring $LBM tokens. <br /><br />Ensure your wallet has sufficient balance in the desired currency to display available options or alternatively use pay by card or bank transfer for FIAT payment. <br /> <br />
                        <span  className=''>
                        After selecting your desired currency in our widget, you'll be redirected to your wallet or card payment gateway for completing the transaction.
                        <span className='font-bold text-gray-200'>
                                There will then be 2 options to choose from:
                            </span>
                        </span>
                    </h6>
                </div>

                <div className="inline-block px-6 p-2 lg:w-[33%] text-left ">
                        <span className="text-3xl font-bold">Step 3</span>
                    <h4 className="text-sm mt-2">
                        You can claim your $LBM tokens at the end of the presale. Details will be released closer to the time.
                        Once the presale period has concluded, you must visit our website and click the ‘Claim’ button.
                    </h4>
                    <button className='px-8 py-2 rounded-2xl bg-orange-500 text-gray-50 mt-8'>Claim Now</button>
                </div>

            </div>

            <div className='block lg:w-[50%] mx-auto text-gray-100  rounded-3xl  p-4'>
                <div className="lg:flex gap-6">
                <div className=' lg:w-80 bg-gray-400 text-gray-800 p-4 rounded-xl mb-6 lg:mb-0'>
                    <h1 className='border-b-2 text-blue-900 mb-2'>BUY $LBM WITH CARD OR BANK TRANSFER (FIAT CURRENCY) </h1>
                    <h4 className='text-sm text-left'>Here you can purchase $LBM directly through a bank card or bank transfer. Follow the payment gateway and process payment.
                        Follow step 2 to buy $LBM with CRYPTO. </h4>
                </div>
                <div className=' lg:w-80 bg-gray-400 text-gray-800 p-4 rounded-xl'>
                    <h1 className='border-b-2 text-blue-900 mb-2'>BUY $LBM WITH CRYPTO </h1>
                    <p className='text-sm text-left'>With sufficient CRYPTO in your chosen wallet, you will now be able to swap for $LBM. Inside the ‘TRADE WITH CRYPTO’ panel, enter the amount of $LBM you would like to purchase, click ‘BUY’. You will then be shown the cost of gas and asked to confirm the transaction by your wallet provider. </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
