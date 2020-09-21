import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GetCode from './components/GetCode';
import Verify from './components/Verify';

function Login() {
  const [isVerify, setIsVerify] = useState(false);

  const showGetCode = () => {
    setIsVerify(false);
  };
  const showVerify = () => {
    setIsVerify(true);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={String(isVerify)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {!isVerify ? <GetCode onSubmit={showVerify} /> : <Verify onBack={showGetCode} />}
      </motion.div>
    </AnimatePresence>
  );
}

export default Login;
