import * as MeetApiUtil from "../utils/meet_api_util"

export const RECEIVE_MEETS = "RECEIVE_MEETS"
export const RECEIVE_MEET = "RECEIVE_MEET"
export const DELETE_MEET = "DELETE_MEET"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveMeet = meet => ({
    type: RECEIVE_MEET,
    meet
})

export const receiveMeets = meets => ({
    type: RECEIVE_MEETS,
    meets
})

export const removeMeet = meetId => ({
    type: DELETE_MEET,
    meetId
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const postMeet = meet => dispatch => MeetApiUtil.postMeet(meet)
.then(meet => dispatch(receiveMeet(meet)), err => dispatch(receiveErrors(err.responseJSON)))

export const fetchMeets = userId => dispatch => MeetApiUtil.fetchMeets(userId)
.then(meets => dispatch(receiveMeets(meets)))

export const deleteMeet = (userId, meetId) => dispatch => MeetApiUtil.deleteMeet(userId, meetId)
.then(() => dispatch(removeMeet(meetId)))

export const updateMeet = (userId, meetId, meet) => dispatch => MeetApiUtil.updateMeet(userId, meetId, meet)
.then((meet) => dispatch(removeMeet(meet)), err => dispatch(receiveErrors(err.responseJSON)))