import { RECEIVE_PREFERENCES, CLEAR_PREFERENCES } from "../../actions/preference_actions";



const PreferencesReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PREFERENCES:
            return action.preferences;
        case CLEAR_PREFERENCES:
            return {}
        default: 
            return state
    }
}

export default PreferencesReducer