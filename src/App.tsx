import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react"
import {Provider} from "react-redux"

import './App.css';

import Login from "./components/auth/login.component";
import SignUp from "./components/auth/signup.component";
import AccountCreated from './components/auth/accountCreated';
import Home from './components/home'
import ProtectedRoute from "./routes/ProtectedRoute"

import store, {persistor} from "./store";

function App() {
  const CostumContext =  React.createContext({});

  //objet contenant les liens de l'API
  const links = {
    //lien vers les comptes yowyob
    yowyobAccountRequestURL: "http://localhost:8000/yowyob-account-api/accounts/",
    //yowyobAccountRequestURL: "https://anselme.pythonanywhere.com/yowyob-account-api/accounts",

  }

  //paramètres de connexion à l'API
  const username = "pepi";
  const password = "12345aA_";
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Switch>
            <Route path="/create-account" children={<SignUp username={username} password={password}/>}/>

            <Route path="/account-created" component={AccountCreated}/>

            <Route path="/sign-in" component={Login} />

            <ProtectedRoute path="/" component={Home} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
