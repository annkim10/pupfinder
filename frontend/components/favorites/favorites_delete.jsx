import React from "react"
import {FiHeart} from "react-icons/fi"
import { useState } from "react"

const FavoriteDelete = ({pup, currentUser, postFavorite, deleteFavorite, location}) => {
 
    const [favorite, setFavorite] = useState({
        pup_id: pup.id,
        user_id: currentUser.id
    })

    return (
        <div className="pup-show-fav-button-div">
            <button className="pup-show-fav-button-delete" onClick={() => postFavorite(favorite)}><FiHeart className="favorite-icon"/></button>
        </div>
       
    )
}

export default FavoriteDelete
