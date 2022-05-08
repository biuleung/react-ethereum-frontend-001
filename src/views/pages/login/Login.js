import React from 'react'
import PropTypes from 'prop-types';
import { ethers } from "ethers";
import { useDispatch } from 'react-redux';

const Login = ({ updateAddress }) => {


  const dispatch = useDispatch();

  async function getProvider() {
    // return ethers.getDefaultProvider('rinkeby');
    return new ethers.providers.Web3Provider(window.ethereum);
  }

  async function init() {
    const provider = await getProvider();
    await provider.send("eth_requestAccounts", []);
    const signer = (await provider).getSigner();
    const signerAddress = await signer.getAddress();
    dispatch(updateAddress({ address: signerAddress }));

    window.ethereum.on('accountsChanged', function (accounts) {
      accounts.length ? dispatch(updateAddress({ address: accounts[0] })) : dispatch(updateAddress({ address: '0x' }));
    })
  }

  init();

  return (
    <>
      <div>
        Login works
      </div>
    </>
  )
}

Login.propTypes = {
  updateAddress: PropTypes.func.isRequired
};

export default Login
