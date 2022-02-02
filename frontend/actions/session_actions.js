import * as SessionUtil from "../utils/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveCurrentUser = user => {
    return({
        type: RECEIVE_CURRENT_USER, 
        user
    }) 
}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const login = formUser => dispatch => SessionUtil.postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))

export const logout = () => dispatch => SessionUtil.deleteSession()
.then(() => dispatch(logoutCurrentUser()))

export const signup = user => dispatch => SessionUtil.postUser(user)
.then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))



// , err => dispatch(receiveErrors(err.responseJSON))
