import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link,
  Redirect 
} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import AccountCreated from './components/accountCreated';

function App() {
  //objet contenant les liens de l'API
  const links = {
    //lien vers les comptes yowyob
    yowyobAccountRequestURL: "http://localhost:8000/yowyob-account-api/accounts/",
  }

  //paramètres de connexion à l'API
  const username = "pepi";
  const password = "12345aA_";
  
  return (<Router>
    <div className="App">

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/'>
              <Redirect to="/create-account"></Redirect>
            </Route> 

            <Route path="/create-account" children={<SignUp 
            links={links}
            username={username} 
            password={password}/>}/>

            <Route path="/account-created" component={AccountCreated}/>

            <Route path="/sign-in" component={Login} />
            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
