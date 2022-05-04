import React from 'react'
import PropTypes from 'prop-types';


const Login = ({ loginAddress }) => {
  return (
    <>
      <div>
        Login works
      </div>
    </>
  )
}

Login.propTypes = {
  loginAddress: PropTypes.func.isRequired
};

export default Login
