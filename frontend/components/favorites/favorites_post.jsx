import React from "react"
import {FiHeart} from "react-icons/fi"
import { useState } from "react"

const FavoritePost = ({pup, currentUser, postFavorite}) => {
 
    const [favorite, setFavorite] = useState({
        pup_id: pup.id,
        user_id: currentUser.id
    })

    // console.log("inside favorite", favorite)
    return (
        <div className="pup-show-fav-button-div">
            <button className="pup-show-fav-button" onClick={() => postFavorite(favorite)}><FiHeart className="favorite-icon"/></button>
        </div>
       
    )
}

export default FavoritePost

