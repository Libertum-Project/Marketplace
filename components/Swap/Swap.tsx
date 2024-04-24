'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { tokens } from '../../constants/tokens';
import { exchangeProxy, MAX_ALLOWANCE } from '@/constants';
import { ethers } from 'ethers';
import { createLookup } from '@/utils';
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  useSigner,
} from '@thirdweb-dev/react';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

const Swap = () => {
  const walletAddress = useAddress();
  const signer = useSigner();
  const { TOKENS_BY_SYMBOL } = createLookup(tokens);
  const [sellToken, setSellToken] = useState(TOKENS_BY_SYMBOL['usdc']);
  const [sellTokenAmount, setSellTokenAmount] = useState('');
  const [buyToken, setBuyToken] = useState(TOKENS_BY_SYMBOL['lbm']);
  const [buyTokenAmount, setBuyTokenAmount] = useState('');
  const [openSell, setOpenSell] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  const [quote, setQuote] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [txnHash, setHash] = useState('');

  const fetchPriceData = async () => {
    setLoading(true);
    try {
      const formattedAmount = ethers.utils
        .parseUnits(sellTokenAmount, sellToken.decimals)
        .toString();

      const response = await fetch(
        `/api/quote?srcToken=${sellToken.address}&destToken=${buyToken.address}&sellAmount=${formattedAmount}`
      );
      const data = await response.json();

      console.log('data=', data);

      if (data.status == 500 || data.length == 0) {
        toast({
          title: 'Error',
          description: 'Currently, no quotes availbable for this pair',
          className: cn(
            'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#ff5252] sm:top-0 text-white rounded-[5px]'
          ),
        });
        setSellTokenAmount('');
        setBuyTokenAmount('');
      }

      if (data.length > 0) {
        setBuyTokenAmount(
          ethers.utils.formatUnits(data[0].toTokenAmount, buyToken.decimals)
        );

        setQuote(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const { contract: sellTokenContract } = useContract(sellToken.address);
  const { contract: buyTokenContract } = useContract(buyToken.address);
  const { contract: dexContract } = useContract(exchangeProxy);
  const { data: sellTokenBalance, isLoading: sellTokenBalanceLoading } =
    useTokenBalance(sellTokenContract, walletAddress);
  const { data: buyTokenBalance, isLoading: buyTokenBalanceLoading } =
    useTokenBalance(buyTokenContract, walletAddress);
  const { data: tokenAllowance, isLoading: contractReadLoading } =
    useContractRead(sellTokenContract as any, 'allowance', [
      walletAddress,
      exchangeProxy,
    ]);

  const executeSwap = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/swap`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionData: quote?.transactionData,
          nativeValue: quote?.nativeValue,
          account: walletAddress,
          receiver: walletAddress,
          tradeType: quote?.tradeType,
        }),
      });
      const data = await response.json();

      const tx = await signer?.sendTransaction({
        from: walletAddress,
        to: exchangeProxy,
        data: data.data,
        gasPrice: data.gasPrice,
      });
      const transaction = await tx?.wait();

      if (transaction?.transactionHash) {
        setHash(transaction?.transactionHash);
        toast({
          title: 'Success',
          description: 'Your transaction was successful',
          className: cn(
            'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#00b3b5] sm:top-0 text-white rounded-[5px]'
          ),
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again',
        className: cn(
          'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#ff5252] sm:top-0 text-white rounded-[5px]'
        ),
      });
    } finally {
      setLoading(false);
      setSellTokenAmount('');
      setBuyTokenAmount('');
    }
  };

  const switchTokens = () => {
    const one = sellToken;
    const two = buyToken;
    setSellToken(two);
    setBuyToken(one);
    fetchPriceData();
  };

  useEffect(() => {
    if (buyToken && sellToken && sellTokenAmount.length > 0) {
      const timer = setTimeout(() => {
        fetchPriceData();
      }, 500);

      return () => clearTimeout(timer);
    }

    if (sellTokenAmount.length == 0) {
      setBuyTokenAmount('0.0');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellToken, buyToken, sellTokenAmount]);

  const { mutateAsync: approveTokenSpending } = useContractWrite(
    sellTokenContract,
    'approve'
  );

  function determineButtonState(
    sellToken: any,
    sellTokenAmount: any,
    sellTokenBalance: any,
    tokenAllowance: any,
    contractReadLoading: any
  ) {
    let action = '';
    let isDisabled = true;

    if (sellTokenAmount > +sellTokenBalance?.displayValue) {
      action = `Insufficient ${sellToken.symbol} balance`;
      isDisabled = true;
    } else if (tokenAllowance && tokenAllowance?._hex == '0x00') {
      action = `Approve ${sellToken.symbol} Allowance`;
      isDisabled = false;
    } else if (!sellTokenAmount) {
      action = 'Swap';
      isDisabled = true;
    } else {
      action = 'Swap';
      isDisabled = false;
    }

    return { action, isDisabled };
  }

  const { action, isDisabled } = determineButtonState(
    sellToken,
    sellTokenAmount,
    sellTokenBalance,
    tokenAllowance,
    contractReadLoading
  );

  const handleAction = () => {
    if (action === 'Approve ' + sellToken.symbol + ' Allowance') {
      return approveTokenSpending({
        args: [sellToken.address, MAX_ALLOWANCE],
      });
    } else if (action === 'Swap') {
      return executeSwap();
    }
  };

  return (
    <>
      <section className="relative">
        <Card className="w-[480px] bg-[#fff] border-black border-opacity-5 shadow-md">
          <CardHeader className="border-b-2 mb-2 p-2">
            <CardTitle className="text-black flex justify-between">
              <Image
                src="/assets/get-icon.png"
                alt="Get"
                width={150}
                height={150}
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-montserrat mb-2">Sell</p>
                <Dialog open={openSell} onOpenChange={setOpenSell}>
                  <DialogTrigger asChild>
                    <div className="assetOne text-white bg-[#00b3b5] cursor-pointer text-sm assetTwo p-2 rounded-full shadow flex gap-3 items-center font-semibold">
                      <Image
                        src={sellToken.logo}
                        width={20}
                        height={20}
                        alt="Token image"
                      />
                      {sellToken.symbol}

                      <ChevronDownIcon className="font-semibold" />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-white max-h-72 overflow-auto rounded-[5px]"
                    style={{
                      zIndex: 99,
                    }}
                    onEscapeKeyDown={() => setOpenSell(false)}
                  >
                    {tokens
                      .filter((token) => token.symbol !== buyToken.symbol)
                      .map((token) => {
                        return (
                          <button
                            key={token.name}
                            className="border-b border-b-[#000] text-black p-2 cursor-pointer text-left flex items-center gap-2 hover:bg-[#e4e7eb] rounded-[5px]"
                            onClick={() => {
                              setSellToken(
                                TOKENS_BY_SYMBOL[token.symbol.toLowerCase()]
                              );
                              setOpenSell(false);
                            }}
                          >
                            <Image
                              src={
                                TOKENS_BY_SYMBOL[token.symbol.toLowerCase()]
                                  .logo
                              }
                              width={20}
                              height={20}
                              alt="Token"
                            />
                            {token.name}
                          </button>
                        );
                      })}
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-montserrat text-[#9299a6] flex items-center">
                  Balance:-{' '}
                  {sellTokenBalanceLoading ? (
                    <Skeleton className="h-3 w-[50px] bg-black bg-opacity-5 rounded-[48px]" />
                  ) : (
                    sellTokenBalance?.displayValue.slice(0, 10)
                  )}
                </div>
              </div>
            </div>

            <div>
              <Input
                placeholder="0.0"
                className="bg-white border-0 text-black text-[36px] font-montserrat placeholder:text-gray-400 p-0 mt-3 mb-3"
                value={sellTokenAmount}
                onChange={(e) => setSellTokenAmount(e.target.value)}
              />
            </div>

            <button
              className="absolute top-[50%] left-[0] right-0 m-auto w-[30px] cursor-pointer p-2 bg-white rounded-full flex items-center justify-center"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                zIndex: 10,
                transform: 'translateY(-100%)',
              }}
              onClick={switchTokens}
            >
              <Image
                src="/assets/arrow-down-black.svg"
                width={20}
                height={20}
                alt="Token image"
              />
            </button>

            <hr />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-montserrat mb-2 mt-2">Buy</p>
                <Dialog open={openBuy} onOpenChange={setOpenBuy}>
                  <DialogTrigger asChild>
                    <div className="assetOne text-white bg-[#00b3b5] cursor-pointer text-sm assetTwo p-2 rounded-full shadow flex gap-3 items-center font-semibold">
                      <Image
                        src={buyToken.logo}
                        width={20}
                        height={20}
                        alt="Token image"
                      />
                      {buyToken.symbol}

                      <ChevronDownIcon className="font-semibold" />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-white max-h-72 overflow-auto rounded-[5px]"
                    style={{
                      zIndex: 99,
                    }}
                    onEscapeKeyDown={() => setOpenBuy(false)}
                  >
                    {tokens
                      .filter((token) => token.symbol !== sellToken.symbol)
                      .map((token) => {
                        return (
                          <button
                            key={token.name}
                            className="border-b border-b-[#000] text-black p-2 cursor-pointer text-left flex items-center gap-2 hover:bg-[#e4e7eb] rounded-[5px]"
                            onClick={() => {
                              setBuyToken(
                                TOKENS_BY_SYMBOL[token.symbol.toLowerCase()]
                              );
                              setOpenBuy(false);
                            }}
                          >
                            <Image
                              src={
                                TOKENS_BY_SYMBOL[token.symbol.toLowerCase()]
                                  .logo
                              }
                              width={20}
                              height={20}
                              alt="Token"
                            />
                            {token.name}
                          </button>
                        );
                      })}
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-montserrat text-[#9299a6] mb-2 mt-2 flex items-center">
                  Balance:-{' '}
                  {buyTokenBalanceLoading ? (
                    <Skeleton className="h-3 w-[50px] bg-black bg-opacity-5 rounded-[48px]" />
                  ) : (
                    buyTokenBalance?.displayValue.slice(0, 10)
                  )}
                </div>
              </div>
            </div>

            <div className="inputs">
              {loading ? (
                <div className="h-10 w-full mt-3 mb-3 flex items-center">
                  <Skeleton className="h-5 w-[50%] bg-black bg-opacity-5 rounded-[48px]" />
                </div>
              ) : (
                <Input
                  placeholder="0.0"
                  className="bg-white border-0 text-black text-[36px] font-montserrat placeholder:text-gray-400 p-0 mt-3 mb-3"
                  value={buyTokenAmount}
                  disabled
                />
              )}
            </div>
            <hr />
          </CardContent>
          <CardFooter>
            <div className="connetWalletButton w-full mb-2">
              {walletAddress ? (
                <Web3Button
                  isDisabled={isDisabled}
                  className="bg-[#00b3b5] hover:bg-[#00b3b5] w-full text-white uppercase rounded-[30px] disabled:pointer-events-none disabled:opacity-50"
                  contractAddress={sellToken.address}
                  action={handleAction}
                  style={{ width: '100%' }}
                >
                  {action}
                </Web3Button>
              ) : (
                <Link
                  href="/login"
                  className="flex justify-center items-center px-4 py-2 bg-[#00b3b5] rounded-[5px] border border-[#00b3b5] backdrop-blur-[10px] text-white gap-3 override-link"
                >
                  Connect Wallet
                </Link>
              )}
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Swap;
