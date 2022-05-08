import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfoSlice } from "src/store";
import styles from "./metamask-auth.module.css";

const { updateAddress } = loginInfoSlice.actions;

function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(dispatch) {

    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    dispatch(updateAddress({ address: accounts[0] }))
}

async function checkIfWalletIsConnected(dispatch) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            dispatch(updateAddress({ address: accounts[0] }));
            setUpEthereumEvent(dispatch);
            return;
        }

        if (isMobileDevice()) {
            await connect(dispatch);
        }
    }
}

const accountWasChanged = (dispatch, accounts) => {
    if (accounts.length > 0) {
        dispatch(updateAddress({ address: accounts[0] }))
    } else {
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

    return loginInfo.address && loginInfo.address !== '0x' ? (
        <div className="mr-1">
            <Address userAddress={loginInfo.address} />
        </div>
    ) : (
        <Connect setUserAddress={dispatch} />
    );
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
