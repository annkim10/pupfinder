import React from "react";
import { render } from "react-dom";
import { Link, withRouter } from "react-router-dom";
// import PupShowContainer from "./pup_show_container";
import FavoritePost from "../favorites/favorites_post"

class PupIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        // console.log("inside pup item", this.props)
        const {pup, currentUser, postFavorite, deleteFavorite, favorites} = this.props
        if (!pup || !currentUser || !postFavorite ) return null
    
        const rescueId = pup.orgId
        
        return (
            <div className="card-wrapper">
                <FavoritePost pup={pup} currentUser={currentUser} favorites={favorites} deleteFavorite={deleteFavorite} postFavorite={postFavorite}/>
                <Link to={`/pups/${rescueId}/${pup.id}`}>
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

}



export default PupIndexItem