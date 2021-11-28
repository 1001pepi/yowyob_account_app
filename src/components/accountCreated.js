import React, {useState, useEffect} from "react";
import logo from "../assets/logo.png"

function AccountCreated(){

    return (
        <div>
            <div className="container-fluid">
                <img src={logo} alt="yowyob"/>
            </div>

            <br></br>
            <br></br>

            <p className="text-center">Votre compte yowyob a bien ét créé. Connectez vous pour profiter de la suite d'applications que nous vous offrons.</p>

            <hr/>

            <p className="text-center">
                <a href="/sign-in">sign in?</a>
            </p>
        
        </div>
    );
}

export default AccountCreated;