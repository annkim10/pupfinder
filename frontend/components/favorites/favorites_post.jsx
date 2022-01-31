import React from "react"
import {FiHeart} from "react-icons/fi"
import { useState } from "react"

const FavoritePost = ({pup, currentUser, postFavorite, deleteFavorite, favorites}) => {
 
    const [favorite, setFavorite] = useState({
        pup_id: pup.id,
        user_id: currentUser.id
    })

    if (favorites) {
        var favPups = Object.values(favorites)
        favPups = favPups.map(pup => pup.pupId) 
        var keys = Object.keys(favorites)
        if (favPups.includes(pup.id)) {
            // console.log("key hash", keys.forEach(key => console.log(favorites[key])))
            var favoriteId = keys.find(key => favorites[key].pupId === pup.id)
        }
    }
  
    return (
        <div className="pup-show-fav-button-div">
            {/* <button className={ (favPups && !favPups.includes(pup.id)) ? "pup-show-fav-button-post" : "pup-show-fav-button-delete"} onClick={() => postFavorite(favorite)}><FiHeart className="favorite-icon"/></button> */}
            <button className={ (favPups && !favPups.includes(pup.id)) ? "pup-show-fav-button-post" : "pup-show-fav-button-delete"} onClick={(favPups && !favPups.includes(pup.id)) ? (() => postFavorite(favorite)) : (() => deleteFavorite(favoriteId))}><FiHeart className="favorite-icon"/></button>
        </div>
       
    )
}



export default FavoritePost

