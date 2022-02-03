import * as PreferenceApiUtil from "../utils/preference_api_util"


export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES"
export const CLEAR_PREFERENCES = "CLEAR_PREFERENCES"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const receivePreferences = preferences => ({
    type: RECEIVE_PREFERENCES,
    preferences
})

export const clearPreferences = () => ({
    type: CLEAR_PREFERENCES
})


export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

 
export const fetchPreferences = preferenceId => dispatch => PreferenceApiUtil.fetchPreferences(preferenceId)
.then(preferences => dispatch(receivePreferences(preferences)))

export const postPreferences = preferences => dispatch => PreferenceApiUtil.postPreferences(preferences)
.then(preferences => dispatch(receivePreferences(preferences)), err => dispatch(receiveErrors(err.responseJSON)))

export const fetchAllPreferences = () => dispatch => PreferenceApiUtil.fetchAllPreferences()
.then(preferences => dispatch(receivePreferences(preferences)))