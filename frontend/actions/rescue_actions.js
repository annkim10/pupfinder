import * as RescueApiUtil from "../utils/rescue_api_util"

export const RECEIVE_RESCUES = "RECEIVE_RESCUES"
export const RECEIVE_RESCUE = "RECEIVE_RESCUE"


export const receiveRescues = rescues => {
    return({
        type: RECEIVE_RESCUES,
        rescues
    })
}

export const receiveRescue = rescue => {
    return({
        type: RECEIVE_RESCUE,
        rescue
    })
}

export const fetchRescues = () => dispatch => RescueApiUtil.fetchRescues()
.then(rescues => dispatch(receiveRescues(rescues)))

export const fetchRescue = rescueId => dispatch => RescueApiUtil.fetchRescue(rescueId)
.then(rescue => dispatch(receiveRescue(rescue)))