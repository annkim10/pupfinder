import * as PupApiUtil from "../utils/pup_api_util"

export const RECEIVE_PUPS = "RECEIVE_PUPS"
export const RECEIVE_PUP = "RECEIVE_PUP"


export const receivePups = pups => {
    return({
        type: RECEIVE_PUPS,
        pups
    })
}

export const receivePup = pup => {
    return({
        type: RECEIVE_PUP,
        pup
    })
}

export const fetchPups = () => dispatch => PupApiUtil.fetchPups()
.then(pups => dispatch(receivePups(pups)))

export const fetchPup = pupId => dispatch => PupApiUtil.fetchPup(pupId)
.then(pup => dispatch(receivePup(pup)))

export const filterPup = filter => dispatch => PupApiUtil.filterPup(filter)
.then(pups => dispatchEvent(receivePups(pups)) )