import { useEffect, useState } from 'react';
import { Login } from './compornents/Login';
import { Main } from './compornents/Main';
import './App.css';

function App() {
  const checkToken = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  const [isLogin, setIsLogin] = useState(checkToken());

  return (
    <div className="App ">
      {!isLogin ? <Login setIsLogin={setIsLogin} isLogin={isLogin} ></Login>
        : <Main setIsLogin={setIsLogin} ></Main>}
    </div>
  );
}

export default App;
