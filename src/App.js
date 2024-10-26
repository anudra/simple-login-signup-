import './App.css';
import {useState} from 'react';

function App() {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className="App-header">

      <button className={isLogin ? "toggle" : "not"} onClick = {() => setIsLogin(true)}>Login</button>
      <button className={isLogin ? "not" : "toggle"} onClick = {() => setIsLogin(false)}>Sign Up</button>

      <br/><br/><br/>
      {isLogin ? 
        <>
          <form>
            <label>Email: &emsp; </label><lr/>
            <input type="email" placeholder='Enter Your Email Id' /><br/>

            <label>Password: &emsp; </label>
            <input type="password" placeholder='Enter Your Password' /><br/><br/>

            <button type="submit">Login</button>
          </form><br/>
          <p>Don't have a account ? <a className="App-link" onClick={() => setIsLogin(false)}>Create now..!!</a></p>
        </> : 
        <> 
          <form>
          <label>Username: &emsp; </label><lr/>
          <input type="text" placeholder='Enter Your Name' /><br/>
            
            <label>Email: &emsp; </label><lr/>
            <input type="email" placeholder='Enter Your Email Id' /><br/>

            <label>Password: &emsp; </label>
            <input type="password" placeholder='Enter Your Password' /><br/><br/>

            <button type="submit">Sign Up</button>
          </form>
        </>}

    </div>

  );
}

export default App;
