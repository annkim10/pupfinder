import * as PreferenceApiUtil from "../utils/preference_api_util"


export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES"


export const receivePreferences = preferences => ({
    type: RECEIVE_PREFERENCES,
    preferences
})

export const fetchPreferences = preferenceId => dispatch => PreferenceApiUtil.fetchPreferences(preferenceId)
.then(preferences => dispatch(receivePreferences(preferences)))

export const postPreferences = preferences => dispatch => PreferenceApiUtil.postPreferences(preferences)
.then(preferences => dispatch(receivePreferences(preferences)))

export const fetchAllPreferences = () => dispatch => PreferenceApiUtil.fetchAllPreferences()
.then(preferences => dispatch(receivePreferences(preferences)))