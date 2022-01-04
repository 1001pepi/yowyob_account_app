import {useHistory, useLocation} from "react-router";

import '../styles/applicationCard.css'


function ApplicationCard({logo, appName, url}){
    const history = useHistory();


    const handleClick = event => {
        window.location.href = url; 

        event.preventDefault();
    }

    return(
        <div className="col-2 m-2" onClick={event => handleClick(event)}>
            <div className="card text-center applicationCard">
                <div className="text-center">
                        <img src={logo} className="card-img-top custom-card-image m-2" alt={appName}/>
                </div>
                
                <div class="card-body">
                    <h6 className="card-title font-weight-bold">{appName}</h6>
                </div>
            </div>
        </div>
    );
}

export default ApplicationCard;