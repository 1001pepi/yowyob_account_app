import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png"
import '../../styles/auth.css'
import '../../styles/forms.css'

import authSlice from "../../store/slices/auth";

function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    
    const dispatch = useDispatch();
    const history = useHistory();

    //etat pour contrôler l'affichage du message d'alerte pour le bon remplissage du formulaire
    const [displayAlert, setDisplayAlert] = useState(false)

    //etat contenant le message d'alerte à afficher pour le remplissage des formulaires
    const [alertMsg, setAlertMsg] = useState('')

    let _email, _password

    useEffect(() =>{
        var showPasswordCheckbox = document.querySelector('#showPasswordCheckbox')

        showPasswordCheckbox.addEventListener('change', (event) => {
            setShowPassword(event.target.checked)
        }) 
    }, [])

    const handleLogin = (email, password) => {
        const form = new FormData();

        form.append('username', _email.value)
        form.append('password', _password.value)

        axios
        .post(`${process.env.REACT_APP_YOWYOB_ACCOUNT_REQUEST_URL}/login/`, form)
        .then((res) => {
            dispatch(
                authSlice.actions.setAuthTokens({
                    token: res.data.access,
                    refreshToken: res.data.refresh,
                })
            );

            dispatch(authSlice.actions.setAccount(res.data.user));
            setLoading(false);
            history.push("/");
        })
        .catch((err) => {
            setDisplayAlert(true)
            setAlertMsg("Incorrect email or password!")
            setMessage(err.response);
        })
    }

    const handleClick = e => {
        handleLogin(_email.value, _password.value)

        e.preventDefault();
    }

    return (
        <div className="auth">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <div className="container-fluid">
                            <img src={logo} alt="yowyob"/>
                        </div>

                        <form>
                            <br></br>

                            <h3>Sign In</h3>

                            <div className="form-group">
                                <input ref={input => _email = input} type="email" className="form-control" placeholder="Enter email" required />
                            </div>

                            <div className="form-group">
                                {
                                    showPassword ?

                                    <input ref={input => _password = input} type="text" id="password" className="form-control" placeholder="Enter password" required/>

                                    :

                                    <input ref={input => _password = input} type="password" id="password" className="form-control" placeholder="Enter password" required/>
                                }
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="showPasswordCheckbox" />
                                    <label className="custom-control-label" htmlFor="showPasswordCheckbox">Show password</label>
                                </div>
                            </div>

                            <hr></hr>
                            {
                                displayAlert ? <div className="form-alert col-12" style={{marginBottom:"25px"}}>
                                    {alertMsg}
                                </div> : null
                            }

                            <button type="submit" className="btn btn-primary btn-block" onClick={event => handleClick(event)}>Sign in</button>

                            <p className="forgot-password text-center">
                                Don't have an account? <a href="/create-account">sign up</a>
                            </p>
                            <p className="forgot-password text-center">
                                <a href="#">Forgot password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Login;
