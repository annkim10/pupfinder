import { DELETE_MEET, RECEIVE_MEET, RECEIVE_MEETS } from "../../actions/meet_actions";


const MeetReducers = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MEET: 
            return action.meet;
        case RECEIVE_MEETS:
            return action.meets;
        case DELETE_MEET:
            const nextState = Object.assign({}, state)    
            delete nextState[action.meetId]
            return nextState
        default:
            return state
    }
}

export default MeetReducers