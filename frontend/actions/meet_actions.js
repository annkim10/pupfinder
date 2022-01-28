import * as MeetApiUtil from "../utils/meet_api_util"

export const RECEIVE_MEETS = "RECEIVE_MEETS"
export const RECEIVE_MEET = "RECEIVE_MEET"
export const DELETE_MEET = "DELETE_MEET"

export const receiveMeet = meet => ({
    type: RECEIVE_MEET,
    meet
})

export const postMeet = meet => dispatch => MeetApiUtil.postMeet(meet)
.then(meet => dispatch(receiveMeet(meet)))
