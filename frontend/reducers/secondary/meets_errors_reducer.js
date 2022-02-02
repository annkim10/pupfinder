import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../../actions/meet_actions";

const MeetsErrorsReducer = (state=[], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state
    }
}

export default MeetsErrorsReducer