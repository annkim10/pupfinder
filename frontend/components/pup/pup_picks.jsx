import React from "react";
import { Link, withRouter } from "react-router-dom";
// import PupShowContainer from "./pup_show_container";
import FavoritePost from "../favorites/favorites_post"

const PupPicks = (props) => {
    // console.log(props.pup)
    const {pup, currentUser, postFavorite} = props
    if (!pup || !currentUser || !postFavorite) return null
  
    const rescueId = pup.orgId
    
    return (
        <div className="pup-picks-wrapper">
            <FavoritePost pup={pup} currentUser={currentUser} postFavorite={postFavorite}/>
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