import React, {useState, useEffect} from "react";

import Navbar from "./navbar";
import ApplicationCard from "./applicationCard";

import product_management from "../assets/product_management.png"
import date_liner from "../assets/date_liner.png"
import logo from "../assets/logo.png"


function Home(){
    return (
        <div>
            <Navbar />
            <hr/>

            <br></br>

            <h2 className="text-center font-weight-bold">Suite d'applications yowyob</h2>

            <br></br>

            <div className="container">
                <div className="col d-flex justify-content-center">
                    <ApplicationCard logo={product_management} appName="Product Management" url={`${process.env.REACT_APP_PRODUCT_MANAGEMENT_REQUEST_URL}`} />

                    <ApplicationCard logo={date_liner} appName="DateLiner" url={`${process.env.REACT_APP_DATELINER_REQUEST_URL}`} />

                    <ApplicationCard logo={logo} appName="compagny" url={`${process.env.REACT_APP_COMPAGNY_REQUEST_URL}`} />

                    <ApplicationCard logo={logo} appName="Employee" url={`${process.env.REACT_APP_EMPLOYEE_REQUEST_URL}`} />

                    <ApplicationCard logo={logo} appName="Expense" url={`${process.env.REACT_APP_EXPENSE_REQUEST_URL}`} />

                </div>
            </div>

            <br></br>
            <br></br>

            <hr/>
            
        </div>
    );
}

export default Home;