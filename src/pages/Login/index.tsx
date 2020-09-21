import React, { useState } from 'react';
import GetCode from './components/GetCode';
import Verify from './components/Verify';

function Login() {
  const [isVerify, setIsVerify] = useState(true);

  const showGetCode = () => {
    setIsVerify(false);
  };
  const showVerify = () => {
    setIsVerify(true);
  };

  return !isVerify ? <GetCode onSubmit={showVerify} /> : <Verify onBack={showGetCode} />;
}

export default Login;
