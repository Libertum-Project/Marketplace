import { ethers } from "ethers";
import { web3AuthInstance } from "../../../components/ICOPage/ICO";
import { contracts } from "../../../config/web3/contracts";
import usdtAbi from "./../../ABI/MockUSDT.json"
import BigNumber from "bignumber.js"

export const handleBuyLibertum = async () => {
    try {
        if (!checkIfNeedApproval) {
            alert("Approval Needed")
            return
        }
    }
    catch (err) {
        console.log("err", err)
    }
}

export const handleApproveUsdt = async (amount, account) => {

    try {
        let contract = await contractInstance(getAddress("usdt"), usdtAbi.abi)

        let decimals = await getTokenDecimals(contract)
        console.log("contract of token is", contract, amount?.toString(), decimals)
        let convertedAmount = new BigNumber(amount).multipliedBy(new BigNumber(10).exponentiatedBy(new BigNumber(decimals?.toString()))).toString()
        console.log("convertedAmount", convertedAmount)
        if (checkIfNeedApproval(amount, account)) {
            let res = await contract.approve(getAddress("libertum"), convertedAmount, { from: account })
            res = await res.wait()
            console.log("Res", res)
            return true
        }
    }
    catch (err) {
        console.log("Err", err)
        if (err.code == "ACTION_REJECTED") {
            alert("User Denied")
            return false
        }
    }
}

export const checkIfNeedApproval = async (amount, account) => {
    try {
        let contract = await contractInstance(getAddress("usdt"), usdtAbi.abi)
        console.log("contract of token is", contract)
        let allowance = await contract.allowance(getAddress("libertum"), account)
        console.log("allowance is", allowance?.toString())
        let decimals = await getTokenDecimals(contract)
        let normalizedAllowance = new BigNumber(allowance).dividedBy(new BigNumber("10").exponentiatedBy(new BigNumber(decimals?.toString())))
        return normalizedAllowance.isLessThan(new BigNumber(amount?.toString()))
    }
    catch (Err) {
        console.log("Err", Err)
    }
}

export const contractInstance = async (SCAddress, ABI) => {
    try {
        let pro = await web3AuthInstance();

        let provider = new ethers.providers.Web3Provider(pro);
        console.log("pro", provider);
        let signer = provider.getSigner();
        let a = new ethers.Contract(SCAddress, ABI, signer);
        console.log("contract", a)
        if (a) {
            return a;
        } else {
            return {};
        }
    }
    catch (Err) {
        console.log("Err", Err)
    }
};

export const getAddress = (contract) => {
    return contracts[contract][import.meta.env.VITE_NETWORK_ID]
}

export const getTokenDecimals = async (contract) => {
    try {
        let decimals = await contract.decimals()
        return Number(decimals)
    }
    catch (err) {
        console.log("Error", err)
    }
}