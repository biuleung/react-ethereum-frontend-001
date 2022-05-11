import { ethers } from "ethers"
import * as Register from '../../contracts-info/register'

async function getProvider() {
    // return ethers.getDefaultProvider('rinkeby');
    return new ethers.providers.Web3Provider(window.ethereum);
}

const RegistrationCheck = async (addr) => {
    try {
        const provider = await getProvider()
        const contract = new ethers.Contract(Register.REGISTER_ADDRESS, Register.REGISTER_ABI, provider);
        const isRegistered = await contract.getRegisteredAccount(addr);

        if (isRegistered && isRegistered[1]) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false;
    }

}

export default RegistrationCheck