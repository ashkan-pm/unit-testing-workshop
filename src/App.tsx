import React, { useEffect } from 'react';
import Router from './Router';

function App() {
  useEffect(() => {
    fetch('/api/validate', {
      method: 'POST',
      body: JSON.stringify({
        token: 'super_secure_token:1'
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(String(response.status));
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Router />;
}

export default App;
