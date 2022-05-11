import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfoSlice } from "src/store";
import styles from "./metamask-auth.module.css";
import RegistrationCheck from "./registration-check";

const { updateAddress } = loginInfoSlice.actions;

function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(dispatch) {

    if (!window.ethereum) {
        alert("Get MetaMask!");
        dispatch(updateAddress({ address: '0x' }));
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    await RegistrationCheck(accounts[0])
        ? dispatch(updateAddress({ address: accounts[0], isRegistered: true }))
        : dispatch(updateAddress({ address: accounts[0], isRegistered: false }));
}

async function checkIfWalletIsConnected(dispatch) {
    if (window.ethereum) {
        setUpEthereumEvent(dispatch);
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            await RegistrationCheck(accounts[0])
                ? dispatch(updateAddress({ address: accounts[0], isRegistered: true }))
                : dispatch(updateAddress({ address: accounts[0], isRegistered: false }));
            setUpEthereumEvent(dispatch);
            return;
        }
        else {
            dispatch(updateAddress({ address: '0x' }))
        }

        if (isMobileDevice()) {
            await connect(dispatch);
        }
    }
}

const accountWasChanged = async (dispatch, accounts) => {
    if (accounts.length > 0) {
        // dispatch(updateAddress({ address: accounts[0] }));
        await RegistrationCheck(accounts[0])
            ? dispatch(updateAddress({ address: accounts[0], isRegistered: true }))
            : dispatch(updateAddress({ address: accounts[0], isRegistered: false }));
    }
    else {
        dispatch(updateAddress({ address: '0x' }))
    }

}

const clearAccount = (dispatch) => {
    dispatch(updateAddress({ address: '0x' }))
};

// let handleAccountsChanged;
// let handleDisconnect;

function setUpEthereumEvent(dispatch) {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountWasChanged.bind(null, dispatch));
        window.ethereum.on('disconnect', clearAccount.bind(null, dispatch));
    }
}

// function removeEthereumEvent() {
//     if (window.ethereum) {
//         window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
//         window.ethereum.removeListener('disconnect', handleDisconnect)
//     }
// }

export default function MetaMaskAuth() {
    const dispatch = useDispatch();
    useEffect(() => {
        checkIfWalletIsConnected(dispatch);

        // return () => {
        //     // removeEthereumEvent();
        // }
    }, [dispatch]);

    const loginInfo = useSelector(state => state.loginInfo);
    useEffect(() => {
        checkIfWalletIsConnected(dispatch);

        // return () => {
        //     // removeEthereumEvent();
        // }
    }, [dispatch]);

    switch (loginInfo.address && loginInfo.address !== '0x') {
        case true:
            if (loginInfo.isRegistered === true) {
                return (
                    <div className="mr-1">
                        <Address userAddress={loginInfo.address} />
                    </div>
                )
            } else {
                return (
                    <div>Signup</div>
                )
            }
        case false:
            return (
                <Connect setUserAddress={dispatch} />
            )
        default:
            break;
    }
}

function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
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
        <button className={styles.button} onClick={() => connect(setUserAddress)}>
            Connect to MetaMask
        </button>
    );
}

function Address({ userAddress }) {
    return (
        <span className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    );
}
