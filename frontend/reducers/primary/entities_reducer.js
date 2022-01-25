import UsersReducer from "../secondary/users_reducer";
import PupsReducer from "../secondary/pups_reducer";
import { combineReducers } from "redux";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    pups: PupsReducer
})


export default EntitiesReducer