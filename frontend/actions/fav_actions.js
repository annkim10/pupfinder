import * as FavApiUtil from "../utils/fav_api_util"

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
})


export const postFavorite = favorite => dispatch => FavApiUtil.postFavorite(favorite)
.then(favorite => dispatch(receiveFavorite(favorite)))

export const fetchFavorites = userId => dispatch => FavApiUtil.fetchFavorites(userId)
.then(favorites => dispatch(receiveFavorites(favorites)))


export const deleteFavorite = favoriteId => dispatch => FavApiUtil.deleteFavorite(favoriteId)
.then(() => dispatch(removeFavorite(favoriteId)))

