import React from "react"
import {FiHeart} from "react-icons/fi"
import { useState } from "react"

class FavoritePost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite: {
                 pup_id: this.props.pup.id,
                user_id: this.props.currentUser.id
            },
            favorited: false 
        }
    }

    renderClassName(favPups, pup) {
        if (!favPups.includes(pup.id) && !this.state.favorited) {
            return "pup-show-fav-button-post"
        } else {
            return  "pup-show-fav-button-delete"
        }
    }

    

    render() {

        const {pup, postFavorite, deleteFavorite, favorites} = this.props

        if (favorites) {
            var favPups = Object.values(favorites)
            favPups = favPups.map(pup => pup.pupId) 
            var keys = Object.keys(favorites)
            if (favPups.includes(pup.id)) {
                var favoriteId = keys.find(key => favorites[key].pupId === pup.id)
            }
        }

        return (
        <div className="pup-show-fav-button-div">
            {/* <button className={ (favPups && !favPups.includes(pup.id)) ? "pup-show-fav-button-post" : "pup-show-fav-button-delete"} 
                onClick={(favPups && !favPups.includes(pup.id)) ? (() => postFavorite(this.state.favorite)) : (() => deleteFavorite(favoriteId))}>
                <FiHeart className="favorite-icon"/></button> */}
            <button className={this.renderClassName(favPups, pup)} 
                onClick={(favPups && !favPups.includes(pup.id)) ? (() => postFavorite(this.state.favorite)) : (() => deleteFavorite(favoriteId))}>
                <FiHeart className="favorite-icon"/></button>
        </div>
       
    )
    }

}

// const FavoritePost = ({pup, currentUser, postFavorite, deleteFavorite, favorites}) => {
 
//     const [favorite, setFavorite] = useState({
//         pup_id: pup.id,
//         user_id: currentUser.id
//     })

//     const [favorited, setFavorited] = useState(false)

//     if (favorites) {
//         var favPups = Object.values(favorites)
//         favPups = favPups.map(pup => pup.pupId) 
//         var keys = Object.keys(favorites)
//         if (favPups.includes(pup.id)) {
//             var favoriteId = keys.find(key => favorites[key].pupId === pup.id)
//         }
//     }
  
//     return (
//         <div className="pup-show-fav-button-div">
//             {/* <button className={ (favPups && !favPups.includes(pup.id)) ? "pup-show-fav-button-post" : "pup-show-fav-button-delete"} onClick={() => postFavorite(favorite)}><FiHeart className="favorite-icon"/></button> */}
//             <button className={ (favPups && !favPups.includes(pup.id)) ? "pup-show-fav-button-post" : "pup-show-fav-button-delete"} onClick={(favPups && !favPups.includes(pup.id)) ? (() => postFavorite(favorite)) : (() => deleteFavorite(favoriteId))}><FiHeart className="favorite-icon"/></button>
//         </div>
       
//     )
// }



export default FavoritePost

