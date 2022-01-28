import React from "react";
import { Link, withRouter } from "react-router-dom";
import PupShowContainer from "./pup_show_container";


const PupIndexItem = (props) => {
    // console.log(props.pup)
    const {pup} = props
    return (
        <div className="card-wrapper">
            <Link to={`/pups/${pup.orgId}/${pup.id}`}>
                <div className="card-body">
                    <img src={pup.photoUrls[0]} className="pup-card-img"/>
                    <div className="pup-card-text">
                        <h1 className="pup-card-name">{pup.pupName}</h1>
                        <ul className="pup-card-description">
                            <li className="pup-card-age">{pup.pupAge}</li>
                            <li className="pup-card-breed">{pup.pupBreed}</li>
                        </ul>
                    </div>
                </div>
            </Link>          
        </div>
    )
}


export default withRouter(PupIndexItem)