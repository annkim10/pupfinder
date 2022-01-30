import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../../actions/fav_actions"

const FavoriteReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_FAVORITE:
            return action.favorite;
        case REMOVE_FAVORITE:
            const nextState = Object.assign({}, state)
            delete nextState[action.favoriteId];
        default: 
            return state
    }
}


export default FavoriteReducer