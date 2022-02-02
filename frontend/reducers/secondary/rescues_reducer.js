import { RECEIVE_RESCUES, RECEIVE_RESCUE } from "../../actions/rescue_actions"

const RescuesReducer = (state = {}, action) => {
    Object.freeze(state) 
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RESCUES:
            return action.rescues;
        case RECEIVE_RESCUE:
            nextState[action.rescue.id] = action.rescue
            return nextState;
        default: 
            return state
    }
}


export default RescuesReducer