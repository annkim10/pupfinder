import UsersReducer from "../secondary/users_reducer";
import { combineReducers } from "redux";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
})


export default EntitiesReducer