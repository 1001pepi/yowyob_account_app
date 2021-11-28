import React, {useState, useEffect} from "react";

import logo from "../assets/logo.png"

function Login(){
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() =>{
        var showPasswordCheckbox = document.querySelector('#showPasswordCheckbox')

        showPasswordCheckbox.addEventListener('change', (event) => {
            setShowPassword(event.target.checked)
        }) 
    }, [])

    return (
        <div>
            <div className="container-fluid">
                <img src={logo} alt="yowyob"/>
            </div>

            <form>
                <br></br>

                <h3>Sign In</h3>

                <div className="form-group">
                    &nbsp;&nbsp;&nbsp;&nbsp;<label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    &nbsp;&nbsp;&nbsp;&nbsp;<label>Mot de passe</label>
                    {
                        showPassword ?

                        <input type="text" id="password" className="form-control" placeholder="Enter password"/>

                        :

                        <input type="password" id="password" className="form-control" placeholder="Enter password"/>
                    }
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="showPasswordCheckbox" />
                        <label className="custom-control-label" htmlFor="showPasswordCheckbox">Show password</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>

                <p className="forgot-password text-right">
                    Don't have an account? <a href="/create-account">sign up</a>
                </p>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        </div> 
    );
}

export default Login;
