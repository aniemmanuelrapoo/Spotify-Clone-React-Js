import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './component/spotify';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token)
    }
    console.log('i have a token', _token)
}, [])
  return (
    <div className="app">
      {
        token ? (
          <h1>I am Logged In</h1>
        ) : (
          <Login />
        )
      }
      {/* <Login /> */}
    </div>
  );
}

export default App;
