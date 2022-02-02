import React from "react";
import { Link, withRouter } from "react-router-dom";

const PupPicks = (props) => {
    // console.log("inside pupPicks", props)
    const {pup} = props
    if (!pup ) return null
  
    const rescueId = pup.orgId
    
    return (
        <div className="pup-picks-wrapper">
            <Link to={`/pups/${rescueId}/${pup.id}`}>
                <div className="pup-picks-body">
                    <img src={pup.photoUrls[0]} className="pup-picks-img"/>
                    <div className="pup-picks-text">
                        <h1 className="pup-picks-name">{pup.pupName}</h1>
                    </div>
                </div>
            </Link>          
        </div>
    )
}


export default PupPicks