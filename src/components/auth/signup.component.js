import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png"

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,
    useHistory,
} from "react-router-dom";
  
import '../../styles/forms.css'
import '../../styles/signup.css'
import '../../styles/auth.css'

var validator = require("email-validator");
var passwordValidator = require('password-validator');

function Signup({username, password}){

    const [showPassword, setShowPassword] = useState(false);

    //etat pour contrôler l'affichage du message d'alerte pour le bon remplissage du formulaire
    const [displayAlert, setDisplayAlert] = useState(false)

    //etat contenant le message d'alerte à afficher pour le remplissage des formulaires
    const [alertMsg, setAlertMsg] = useState('')

    //variable utiles pour le routage
    let history = useHistory();

    useEffect(() =>{
        var showPasswordCheckbox = document.querySelector('#showPasswordCheckbox')

        showPasswordCheckbox.addEventListener('change', (event) => {
            setShowPassword(event.target.checked)
        }) 
      }, [])

    //function to check the validity of the form before the storage of data
    function formValidation(){
        const form = new FormData();

        //retrieve data from the formular
        const first_name = document.getElementById("first_name").value
        const last_name = document.getElementById("last_name").value
        const email = document.getElementById("email").value
        const form_password = document.getElementById("password").value

        //schema for password validation
        var schema = new passwordValidator();
        schema
        .is().min(8, "Le mote de passe doit contenir au moins 8 caractères")                                    // Minimum length 8
        .is().max(100, "Le mot de passe doit contenir au maximum 5 caractères")                                  // Maximum length 100
        .has().uppercase(1,"Le mot de passe doit contenir une majuscule")                              // Must have uppercase letters
        .has().lowercase(1,"Le mot de passe doit contenir une minuscule")                              // Must have lowercase letters
        .has().digits(1, "Le mot de passe doit contenir au moins un chiffre")                                // Must have at least 2 digits

        if(last_name == ""){
            setDisplayAlert(true)
            setAlertMsg("Veuillez renseigner votre nom!")
            return false
        }

        if(first_name == ""){
            setDisplayAlert(true)
            setAlertMsg("Veuillez renseigner votre prénom!")
            return false
        }

        if(email == "" || !validator.validate(email)){
            setDisplayAlert(true)
            setAlertMsg("Veuillez Entrer une adresse mail valide!")
            return false
        }

        if(last_name == ""){
            setDisplayAlert(true)
            setAlertMsg("Veuillez renseigner votre nom!")
            return false
        }

        if(form_password == ""){
            setDisplayAlert(true)
            setAlertMsg("Veuillez renseigner le champ mot de passe!")
            return false

        }else{
            var password_validation = schema.validate(form_password, { details: true })

            if(password_validation.length){
                setDisplayAlert(true)
                setAlertMsg(password_validation[0]['message'])
                return false
            }
        }

        form.append('first_name', first_name);
        form.append('last_name', last_name);
        form.append('email', email);
        form.append('password', form_password);

        return form
    }

    //function to send the request to create an account
    function createAccount(event){
        
        var form = formValidation();

        if(form){
            axios
            .post(`${process.env.REACT_APP_YOWYOB_ACCOUNT_REQUEST_URL}/register/`, form)
            .then(function(response){
                var status = response.status;

                if(status == 201){
                    history.push("/account-created");

                    console.log(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                if(error.response.status == 500){
                    setDisplayAlert(true);
                    setAlertMsg("Il existe déjà un compte pour cette adresse mail.");
                }
            });
        }

        event.preventDefault();
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
                            <h3>Sign up</h3>

                            <div>
                                <div className="form-group">
                                    <input type="text" id="last_name" className="form-control" placeholder="Last name"/>
                                </div>

                                <div className="form-group">
                                    <input type="text" id="first_name" className="form-control" placeholder="First name"/>
                                </div>

                                <div className="form-group">
                                    <input type="email" id="email" className="form-control" placeholder="Enter email"/>
                                </div>

                                <div className="form-group">
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
                            </div>
                            
                            <hr></hr>
                            {
                                displayAlert ? <div className="form-alert col-12" style={{marginBottom:"25px"}}>
                                    {alertMsg}
                                </div> : null
                            }

                            <button type="submit" className="btn btn-primary btn-block" onClick={(event) => createAccount(event)}>Sign Up</button>
                            <p className="forgot-password text-center">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Signup;