import { RECEIVE_PREFERENCES } from "../../actions/preference_actions";



const PreferencesReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PREFERENCES:
            return action.preferences
        default: 
            return state
    }
}

export default PreferencesReducer