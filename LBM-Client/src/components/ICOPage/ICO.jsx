import React, { useState, useEffect } from 'react'
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

import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "./../../Web3RPC";
import Web3 from 'web3';
import { LBMPrice } from '../../config/web3';
import { checkIfNeedApproval, handleApproveUsdt } from '../../smartContracts/components/Ico';

const clientId = "BMofrJHeTcX4xwuGRtPk_x5bz0HjnFPRkrIVBi5bHJPramxfsF1m8feTTsXGlCXApQCItJEJsu7gecejqDd_Nf4";

export const web3AuthInstance = async () => {
    try {
        const web3auth = new Web3Auth({
            clientId,
            web3AuthNetwork: "testnet", // mainnet, aqua,  cyan or testnet
            chainConfig: {
                chainNamespace: CHAIN_NAMESPACES.EIP155,
                chainId: "0x13881",
                rpcTarget: "https://rpc-mumbai.maticvigil.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
            },
        });

        await web3auth.initModal();
        console.log("web3auth.provider", web3auth.provider);
        if (web3auth.provider) {
            return web3auth.provider;
        }
    } catch (Err) {
        console.log("Err", Err);
    }
};

const ICO = () => {
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState()
    const [account, setAccount] = useState()
    const [userInfo, setUserInfo] = useState()
    const [usdInput, setUsdInput] = useState(0)
    const [lbmInput, setLbmInput] = useState(0)
    const [btnName, setBtnName] = useState("Approve")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const needApproval = await checkIfNeedApproval(usdInput, account)
            if (needApproval) {
                setBtnName("Approve")
            }
            else {
                setBtnName("Buy Now")
            }
        }
        fetch()
    }, [usdInput, loading])


    const handleUsdChange = (e) => {
        setUsdInput(e.target.value)
        setLbmInput(e.target.value / LBMPrice)
    }

    const handleLbmChange = (e) => {
        setUsdInput(e.target.value * LBMPrice)
        setLbmInput(e.target.value)
    }

    const handleBuy = async () => {
        if (checkIfNeedApproval()) {
            handleApprove()
        }
    }

    const handleApprove = async () => {
        setLoading(true)
        let res = await handleApproveUsdt(lbmInput, account)
        if (res) {
            setBtnName("Buy Now")
        }
        setLoading(false)
    }

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: "testnet", // mainnet, aqua,  cyan or testnet
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x13881",
                        rpcTarget: "https://rpc-mumbai.maticvigil.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
                    },
                });

                setWeb3auth(web3auth);
                await web3auth.initModal();

                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                    console.log("here", web3auth.provider)
                    await getAccounts(web3auth.provider)
                    await getUserInfo(web3auth)
                };

            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const login = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
        getAccounts(web3authProvider)
        getUserInfo(web3auth)
        window.location.reload()
    };


    const getUserInfo = async (_web3auth) => {
        if (!_web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const user = await _web3auth.getUserInfo();
        console.log("user", user)
        setUserInfo(localStorage.getItem("Web3Auth-cachedAdapter"));
    };

    const logout = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        await web3auth.logout();
        setProvider(null);
        window.location.reload()
    };


    const getAccounts = async (_provider) => {
        console.log("_provider", _provider)
        if (!_provider) {
            console.log("provider not initialized yet");
            await logout()
            localStorage.clear()
            setProvider(null);
            return;
        }
        const web3 = new Web3(_provider);
        console.log("web3", web3)
        const address = (await web3.eth.getAccounts())[0];
        console.log("address", address)
        if (!address) {
            await logout()
            localStorage.clear()
            setProvider(null);
        }
        setAccount(address)
        console.log(address);
    };



    const getPrivateKey = async () => {
        if (!provider) {
            console.log("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();
        console.log(privateKey);
    };



    return (
        <>
            ffd
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
                            {/* <img src={certik} alt="" className='rounded-2xl md:w-40 w-24' /> */}
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
                                <h3>1 LBM Token = {LBMPrice} </h3>
                                <div className='block md:flex md:justify-around lg:pt-2 px-6 py-1 text-left '>
                                    <div className='md:px-2 '>
                                        <p className='md:mb-3 text-sm'>Amount of USD you pay</p>
                                        <div className='flex bg-gray-300 rounded-lg lg:w-[130px] md:w-[200px] mx-auto '>
                                            <input type="text" value={usdInput} onChange={handleUsdChange} placeholder='0' className='py-3 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                            <h2 className='font-bold  md:pr-4 mt-[2px]'>USD</h2>
                                        </div>
                                    </div>
                                    <div className='md:px-2'>
                                        <p className='md:mb-3 text-sm '>Amount of LBM you Recieve</p>
                                        <div className='flex rounded-lg bg-gray-300 lg:w-[130px] md:w-[200px] mx-auto'>
                                            <input type="text" value={lbmInput} onChange={handleLbmChange} placeholder='0' className='py-2 pl-5 rounded-xl text-lg  bg-gray-300 md:w-[90px]' />
                                            <h2 className='font-bold md:pr-4 mt-[2px]'>LBM</h2>
                                        </div>
                                    </div>
                                </div>
                                <button className='text-xl md:px-32 px-12 mt-2  md:mt-8 mb-5 font-semibold lg:py-2 py-2 rounded-2xl bg-cyan-600 text-black md:py-4' onClick={() => { account ? logout() : login() }}>{account ? account : "Connect Wallettt"}</button>
                                {userInfo == "openlogin" && <button onClick={() => {
                                    getPrivateKey()
                                }}>Export Private Key</button>}

                                {account && <button className='text-xl md:px-32 px-12 mt-2  md:mt-8 mb-5 font-semibold lg:py-2 py-2 rounded-2xl bg-cyan-600 text-black md:py-4' disabled={usdInput ? false : true} onClick={() => { btnName == "Approve" ? handleApprove() : handleBuy() }}>{btnName}</button>}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <LbmPresale />
            <HowToBuy />
            <HowToClaim />
            <TokenSaleStages />
            <Tokenomics />
            <Vesting />
            <LBMBenefits />
            <Roadmap />
            <Faq />
        </>
    )
}

export default ICO