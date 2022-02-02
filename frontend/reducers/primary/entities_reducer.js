import UsersReducer from "../secondary/users_reducer";
import PupsReducer from "../secondary/pups_reducer";
import RescuesReducer from "../secondary/rescues_reducer";
import MeetReducers from "../secondary/meet_reducer";
import FavoriteReducer from "../secondary/favorites_reducer";
import PreferencesReducer from "../secondary/preferences_reducer";
import { combineReducers } from "redux";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    pups: PupsReducer,
    rescues: RescuesReducer,
    meets: MeetReducers, 
    favorites: FavoriteReducer,
    preferences: PreferencesReducer
})


export default EntitiesReducer