import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';

const App=()=> {
  const [users, setusers] = useState([]);
  const loadusers=async()=>{
     const response=await fetch ("https://api.github.com/users") ;
     const jsonResponse = await response.json()
     setusers(jsonResponse);
  };

  return(
    <div className="App">
      <header className="App-header" >
        <div className="head">
          <h1> workMark </h1>
              <button onClick={loadusers}> Get Users</button>
        </div>
        <h1> Users : </h1>
      <ul>
        { users.map(  ({id,login,avatar_url})=>
                        <div className="col"><li key={id}>
                                                <p><button type="submit">Log in </button> : {login}</p>
                                                <p>Id number: {id}</p>
                        <img src={avatar_url}></img>
                                             </li>
                        </div>)
        }
      </ul>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
