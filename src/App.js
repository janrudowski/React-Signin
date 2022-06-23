import Form from './components/Form';
import Welcome from './components/Welcome';
import React, { useState } from 'react';
import './style.css';
function App() {
  const [account, setAccount] = useState({});

  function signIn(formData) {
    setAccount(formData);
  }

  return (
    <div className='container'>
      <nav>Logo</nav>
      {account.name ? (
        <Welcome name={account.name} />
      ) : (
        <Form signIn={signIn} />
      )}
    </div>
  );
}

export default App;
