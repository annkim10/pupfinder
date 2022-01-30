import React from "react"
import NavBarContainer from "./navbar/navbar_container"
import HomeContainer from "./home/home_container"
import UserShowContainer from "./user/user_show_container"
import PupIndexContainer from "./pup/pup_index_container"
import PupShowContainer from "./pup/pup_show_container"
import MeetFormContainer from "./meets/meet_form_container"
import EditMeetsFormContainer from "./meets/edit_meet_form_container"
import ConfirmFormContainer from "./meets/confirm_form_container"
import MeetsIndexContainer from "./meets/meets_index_container"
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
            <Route path="/users/:userId/:pupId/:rescueId/meet" component={MeetFormContainer} />
            <Route path="/users/:userId/meets/:meetId" component={EditMeetsFormContainer} />
            <Route path="/users/:userId/meets" component={MeetsIndexContainer} />
            <Route path="/users/:userId" component={UserShowContainer} />
            <Route path="/pups/:rescueId/:pupId" component={PupShowContainer} />
            <Route path="/pups/index" component={PupIndexContainer} />
            <Route exact path="/" component={HomeContainer}/>
        </Switch>
        {/* <Footer /> */}
    </div>
);

export default App;