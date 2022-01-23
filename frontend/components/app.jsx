import React from "react"
import NavBarContainer from "./navbar/navbar_container"
import HomeContainer from "./home/home_container"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import AuthRoute from "../utils/route_util"
import Modal from "./modal/modal"
import Footer from "./home/footer"


const App = () => (
    <div className="app">
        <Modal />
        <header className="top-navbar-wrapper">
            <NavBarContainer />
        </header>
        <Route exact path="/" component={HomeContainer}/>
         {/* <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <Footer />
    </div>
);

export default App;