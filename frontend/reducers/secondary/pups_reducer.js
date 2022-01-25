import { RECEIVE_PUPS, RECEIVE_PUP } from "../../actions/pup_actions";


export const PupsReducer = (state={}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PUPS:
            return action.pups;
        case RECEIVE_PUP:
            nextState[action.pup.id] = action.pup
            return nextState
        default:
            return state;
    }
}

export default PupsReducer