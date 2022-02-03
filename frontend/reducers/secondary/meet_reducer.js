import { DELETE_MEET, RECEIVE_MEET, RECEIVE_MEETS } from "../../actions/meet_actions";


const MeetReducers = (state={}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state) 
    switch (action.type) {
        case RECEIVE_MEET: 
            nextState[action.meet.id] = action.meet
            return nextState;
        case RECEIVE_MEETS:
            return action.meets;
        case DELETE_MEET:
              
            delete nextState[action.meetId]
            return nextState
        default:
            return state
    }
}

export default MeetReducers