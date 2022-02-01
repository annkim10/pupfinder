import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_PREFERENCES } from "../../actions/preference_actions";


const UsersReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, { [action.user.id]: action.user});
        case RECEIVE_PREFERENCES:
            const nextState = Object.assign({}, state)
            nextState[action.user.id].preferences = action.preferences;
            return nextState
        default: 
            return state
    }
}

export default UsersReducer