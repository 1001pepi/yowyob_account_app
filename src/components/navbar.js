import { connect } from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router";

import logo from "../assets/logo.png"
import store from "../store";
import '../styles/navbar.css'

import authSlice from "../store/slices/auth";

function Navbar(props){
    const dispatch = useDispatch();
    const history = useHistory();

    const {account} = props.auth

    const handleLogout = event =>{

        dispatch(authSlice.actions.setLogout());
        history.push("/login");

        event.preventDefault();
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={logo} alt="yowyob" className="logo m-2"/>
                </div>

                <div className="dropleft col-1">
                    <a class="btn btn-primary m-3 profile_btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" title={"compte yowyob \n" + account.first_name +  " " + account.last_name + "\n" + account.username}>
                        <span className="font-weight-bold">{account.first_name[0]}</span>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#"><i className="fa fa-cog p-1"></i> <span className="font-weight-bold">Paramètres</span></a>
                        <a class="dropdown-item" href="#" onClick={event => handleLogout(event)}><i className="fa fa-sign-out p-1"></i><span className="font-weight-bold">Logout</span></a>
                    </div>
                </div>  
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Navbar);