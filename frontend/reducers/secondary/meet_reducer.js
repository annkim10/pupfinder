import { RECEIVE_MEET } from "../../actions/meet_actions";


const MeetReducers = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MEET: 
            return action.meet;
        default:
            return state
    }
}

export default MeetReducers