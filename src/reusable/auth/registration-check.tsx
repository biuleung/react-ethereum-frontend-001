import { ethers } from "ethers"
import { Dispatch } from "redux";
import { ERCProviderSlice, loginInfoSlice } from "src/store";
import * as Register from '../../contracts-info/register'

const { setProvider } = ERCProviderSlice.actions;
const { updateAddress } = loginInfoSlice.actions;

async function getProvider() {
    // return ethers.getDefaultProvider('rinkeby');
    return new ethers.providers.Web3Provider(window.ethereum);
}

const RegistrationCheck = async (dispatch: Dispatch, addr: string) => {
    try {
        const provider = await getProvider();
        if (provider) {
            dispatch(setProvider(provider));
        }
        const contract = new ethers.Contract(Register.REGISTER_ADDRESS, Register.REGISTER_ABI, provider);
        const isRegistered = await contract.getRegisteredAccount(addr);
        if (isRegistered && isRegistered[1]) {
            dispatch(updateAddress({ address: addr, isRegistered: true }))
            return true
        } else {
            dispatch(updateAddress({ address: addr, isRegistered: false }))
            return false
        }
    } catch (error) {
        return false;
    }

}

export default RegistrationCheck
