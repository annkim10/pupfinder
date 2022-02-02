import { combineReducers } from "redux";
import SessionErrorsReducer from "../secondary/session_errors_reducer"
import MeetsErrorsReducer from "../secondary/meets_errors_reducer";


const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    meets: MeetsErrorsReducer
})


export default ErrorsReducer