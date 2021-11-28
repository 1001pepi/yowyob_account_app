import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Link, 
	Redirect,
} from 'react-router-dom'; 

import logo from '../assets/logo.png'
import Login from './Login'
import SignUp from './SignUp'


function App() {
	return (
		<div className="container">
			<Router>    
				<Switch>
					<Route exact path='/'>
						<Redirect to="/create-account"></Redirect>
					</Route>  

					<Route path="/create-account">
						<SignUp />
					</Route>  
				</Switch>
			</Router>  	
		</div>
	);
}

export default App;
