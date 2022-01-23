import { combineReducers } from "redux";
import SessionErrorsReducer from "../secondary/session_errors_reducer"


const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer
})


export default ErrorsReducer