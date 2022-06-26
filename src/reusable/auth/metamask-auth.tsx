import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { loginInfoSlice } from "src/redux/store";
import styles from "./metamask-auth.module.css";
import RegistrationCheck from "./registration-check";
import { ethers } from "ethers"
import * as Register from '../../contracts-info/register'
import { Dispatch } from "redux";

const { updateAddress } = loginInfoSlice.actions;

function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function checkConnectionToMetaMask(dispatch: Dispatch) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        dispatch(updateAddress({ address: '0x' }));
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    await RegistrationCheck(dispatch, accounts[0])
}

async function checkIfWalletIsConnected(dispatch: Dispatch) {
    if (window.ethereum) {
        setUpEthereumEvent(dispatch);
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            await RegistrationCheck(dispatch, accounts[0])
            setUpEthereumEvent(dispatch);
            return;
        }
        else {
            dispatch(updateAddress({ address: '0x' }))
        }

        if (isMobileDevice()) {
            await checkConnectionToMetaMask(dispatch);
        }
    }
}

async function signup(dispatch: Dispatch, provider: any, account: string) {

    if (await RegistrationCheck(dispatch, account)) {
        dispatch(updateAddress({ address: account, isRegistered: true }));
    } else {
        const signer = provider.getSigner();
        const txContract = new ethers.Contract(Register.REGISTER_ADDRESS, Register.REGISTER_ABI, signer);
        const options = {
            value: 20,
            gasLimit: 300000
        }
        let signupResult;
        try {
            signupResult = await txContract.signup(options);
            // TODO show success toast
        } catch (error: any) {
            // TODO show warning toast
            alert(error.message);
        } finally {
            await RegistrationCheck(dispatch, account);
        }
    }
}

const accountWasChanged = async (dispatch: Dispatch, accounts: string[]) => {
    if (accounts.length > 0) {
        await RegistrationCheck(dispatch, accounts[0])
    }
    else {
        dispatch(updateAddress({ address: '0x' }))
    }
}

const clearAccount = (dispatch: Dispatch) => {
    dispatch(updateAddress({ address: '0x' }))
};

function setUpEthereumEvent(dispatch: Dispatch) {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountWasChanged.bind(null, dispatch));
        window.ethereum.on('disconnect', clearAccount.bind(null, dispatch));
    }
}

function removeEthereumEvent() {
    if (window.ethereum) {
        // window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        // window.ethereum.removeListener('disconnect', handleDisconnect);
    }
}

type ConnectToMetaMaskBtnProps = {
    setUserAddress: Dispatch
}

const ConnectToMetaMaskBtn: React.FunctionComponent<ConnectToMetaMaskBtnProps> = ({setUserAddress} ) => {
    if (isMobileDevice()) {
        const dappUrl = "metamask-auth.ilamanov.repl.co";
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <a href={metamaskAppDeepLink}>
                <button className={styles.button}>
                    Connect to MetaMask
                </button>
            </a>
        );
    }

    return (
        <button className={styles.button} onClick={() => checkConnectionToMetaMask(setUserAddress)}>
            Connect to MetaMask
        </button>
    );
}

type AddressProps = {
    userAddress: string
}

const Address: React.FunctionComponent<AddressProps> = ( {userAddress}) => {
    return (
        <span id='short-address' className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    );
}

const MetaMaskAuth = () => {
    const dispatch = useDispatch();
    const loginInfo = useSelector((state: RootStateOrAny) => state.loginInfo);
    const ERCProvider = useSelector((state: RootStateOrAny) => state.ERCProvider);

    useEffect(() => {
        checkIfWalletIsConnected(dispatch);
        return () => {
            removeEthereumEvent();
        }
    }, [dispatch]);

    switch (loginInfo.address && loginInfo.address !== '0x') {
        case true:
            if (loginInfo.isRegistered === true) {
                return (
                <>
                    <div className="mr-1">
                        <Address userAddress={loginInfo.address} />
                    </div>
                </>
                )
            } else {
                return (
                <>
                    <button
                        className={styles.button}
                        onClick={() => signup(dispatch, ERCProvider.provider, loginInfo.address)}>
                        Sign up
                    </button>
                </>
                    )
            }
        case false:
            return (
                <>
                <ConnectToMetaMaskBtn setUserAddress={dispatch} />
                </>
            )
        default:
            return (
                <></>
            )
    }
}

export default MetaMaskAuth;
