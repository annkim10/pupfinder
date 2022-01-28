import * as MeetApiUtil from "../utils/meet_api_util"

export const RECEIVE_MEETS = "RECEIVE_MEETS"
export const RECEIVE_MEET = "RECEIVE_MEET"
export const DELETE_MEET = "DELETE_MEET"

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

export const postMeet = meet => dispatch => MeetApiUtil.postMeet(meet)
.then(meet => dispatch(receiveMeet(meet)))

export const fetchMeets = userId => dispatch => MeetApiUtil.fetchMeets(userId)
.then(meets => dispatch(receiveMeets(meets)))

export const deleteMeet = (userId, meetId) => dispatch => MeetApiUtil.deleteMeet(userId, meetId)
.then(() => dispatch(removeMeet(meetId)))