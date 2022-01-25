import React from "react"
import NavBarContainer from "./navbar/navbar_container"
import HomeContainer from "./home/home_container"
import UserShowContainer from "./user/user_show_container"
import PupIndexContainer from "./pup/pup_index_container"
import PupShowContainer from "./pup/pup_show_container"
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
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/users/:userId" component={UserShowContainer} />
            <Route path="/pups/index" component={PupIndexContainer} />
            <Route path="/pups/:pupId" component={PupShowContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;