import React, { useState, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import exchangeIcon from './assets/exchangeIcon.svg';
import "./Hero.scss"
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "./../../Web3RPC";
import Web3 from 'web3';

const clientId = import.meta.env.VITE_WEB3AUTH_CLIENT_ID;
import transakSDK from '@transak/transak-sdk';



export const web3AuthInstance = async () => {
  try {
    const web3auth = new Web3Auth({
      clientId,
      web3AuthNetwork: "testnet", // mainnet, aqua,  cyan or testnet
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: import.meta.env.VITE_CHAIN_ID,
        rpcTarget: import.meta.env.VITE_RPC_URL, // This is the public RPC we have added, please pass on your own endpoint while creating an app
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


const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('lbm');
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState()
  const [account, setAccount] = useState()
  const [userInfo, setUserInfo] = useState()



  const handleBuyUsdt = async () => {
    const transak = new transakSDK({
      apiKey: import.meta.env.VITE_TRANSAK_API_KEY, // (Required)
      environment: import.meta.env.VITE_TRANSAK_ENVIRONMENT, // (Required)
      defaultCrypto: 'USDC',
      defaultFiatCurrency: "USD",
      cryptoCurrency: "USDC",
      network: "bsc"
    });
    transak.init()
    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
      console.log('Transak SDK closed!');
    });

    transak.on(transak.EVENTS.TRANSAK_ORDER_CREATED, (orderData) => {
      console.log(orderData);
    });

    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      // transak.close();
    });

    return () => {
      transak.close();
    };
  }


  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: import.meta.env.VITE_NETWORK, // mainnet, aqua,  cyan or testnet
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: import.meta.env.VITE_CHAIN_ID,
            rpcTarget: import.meta.env.VITE_RPC_URL, // This is the public RPC we have added, please pass on your own endpoint while creating an app
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
    await getAccounts(web3authProvider)
    await getUserInfo(web3auth)
    // window.location.reload()
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


  const exchangeRates = {
    lbm: 0.06,
    usd: 1 / 0.06,
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const calculatedValue = value * exchangeRates[selectedCurrency];
    const otherCurrency = selectedCurrency === 'lbm' ? 'usd' : 'lbm';
    document.getElementById(otherCurrency).value = calculatedValue.toFixed(2);
  };

  const handleExchangeClick = () => {
    const otherCurrency = selectedCurrency === 'lbm' ? 'usd' : 'lbm';
    setSelectedCurrency(otherCurrency);

    const inputValue = document.getElementById(selectedCurrency).value;
    const calculatedValue = inputValue * exchangeRates[otherCurrency];
    document.getElementById(otherCurrency).value = calculatedValue.toFixed(2);
  };

  return (

    <div className='first-container'>
      <div className='title'>
        <h2>Transforming an exclusive market into an Inclusive opportunity for Everyone!</h2>
        <h3>Get your LBM Tokens now!</h3>
        <Slide direction={'left'} triggerOnce={true}>
          <section className='text'>
            <p>Don't miss out on your chance to be a part of the inclusive revolution in the real estate market. Start earning a steady rental income every month, hassle-free, and without any additional maintenance costs.</p>
            <p>By purchasing $LBM tokens, you are joining a movement that seeks to democratise and transform the landscape of fractionalised rental income investments. join us in creating a more inclusive world for all.</p>
          </section>
        </Slide>
      </div>
      <Slide direction={'down'} triggerOnce={false}>
        <div className='box'>
          <h4>Private Round - Price: $0.06</h4>
          <p className='first'>SOLD 2.345.534/12.500.000</p>
          <p className='second'>99% Disscount Community Sale ends soon</p>

          <div className='exchange-box'>
            <h3>Private Community Pre-Sale</h3>
            <p>1 LBM = 0.06 USD</p>

            <div className='exchange-box-coins'>
              <div className='exchange-buttons'>
                <input
                  type='text'
                  id={selectedCurrency}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <p>{selectedCurrency.toUpperCase()}</p>
              </div>

              <img
                className='exchangeIcon'
                src={exchangeIcon}
                alt=''
                onClick={handleExchangeClick}
              />

              <div className='exchange-buttons'>
                <input
                  type='text'
                  id={selectedCurrency === 'lbm' ? 'usd' : 'lbm'}
                  readOnly
                />
                <p>{selectedCurrency === 'lbm' ? 'USD' : 'LBM'}</p>
              </div>
            </div>

            <button className='connect-wallet' onClick={() => { account ? logout() : login() }}>{account ? account.slice(0, 7) + "....." + account.slice(35, 42) : "Connect Wallet"}</button>
            {account && <div><button className='connect-wallet' onClick={() => { account ? logout() : login() }}>Buy Now</button>
              <button className='connect-wallet' onClick={() => { handleBuyUsdt() }}>Buy USDT</button>
            </div>
            }

          </div>
        </div>
      </Slide>
    </div>

  );
};

export default Hero;
