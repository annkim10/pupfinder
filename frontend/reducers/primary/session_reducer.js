import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER,CLEAR_ERRORS  } from "../../actions/session_actions";

const _nullSession = {
    id: null
}

const SessionReducer = (state=_nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, {id: action.user.id});
        case LOGOUT_CURRENT_USER: 
            return _nullSession;
        case CLEAR_ERRORS:
            return [];
        default: 
            return state
    }
}


export default SessionReducer