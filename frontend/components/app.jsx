import React from "react"
import GreetingsContainer from "./navbar/navbar_container"
import HomeContainer from "./home/home_container"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import SignupFormContainer from "./session_form/signup_form_container"
import LoginFormContainer from "./session_form/login_form_container"
import AuthRoute from "../utils/route_util"


const App = () => (
    <div className="app">
        <header className="top-navbar-wrapper">
            <GreetingsContainer />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
        </header>
            {/* <Route exact path="/" component={HomeContainer}/> */}
           
    </div>
)

export default App