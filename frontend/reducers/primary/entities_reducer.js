import UsersReducer from "../secondary/users_reducer";
import PupsReducer from "../secondary/pups_reducer";
import RescuesReducer from "../secondary/rescues_reducer";
import MeetReducers from "../secondary/meet_reducer";
import { combineReducers } from "redux";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    pups: PupsReducer,
    rescues: RescuesReducer,
    meets: MeetReducers
})


export default EntitiesReducer