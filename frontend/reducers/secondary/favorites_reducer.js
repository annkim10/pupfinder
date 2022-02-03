import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from "../../actions/fav_actions"

const FavoriteReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FAVORITE:
            nextState[action.favorite.id] = action.favorite
            return nextState;
        case RECEIVE_FAVORITES:
            return action.favorites
        case REMOVE_FAVORITE:
            // const nextState = Object.assign({}, state)
            delete nextState[action.favoriteId];
            return nextState
        default: 
            return state
    }
}


export default FavoriteReducer