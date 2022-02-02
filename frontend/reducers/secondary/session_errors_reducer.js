import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from "../../actions/session_actions";
import { CLOSE_MODAL } from "../../actions/modal_actions";

const SessionErrorsReducer = (state=[], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER: 
        case CLOSE_MODAL:
            return [];
        default:
            return state
    }
}

export default SessionErrorsReducer