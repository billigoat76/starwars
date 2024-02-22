import './App.css';
import Navbar from './components/Navbar';
import Charlist from './components/Charlist';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const[login,setLogin] = useState(false);
  const[error,setError] = useState("");
  return (
    
    <div className="App">
      {!error &&<Navbar login={login}/>}
      {!login ?<Login login={login} setLogin={setLogin} /> : <Charlist error={error} setError={setError} />}
      
    </div>
  );
}

export default App;
