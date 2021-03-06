import React from "react"
import NavBarContainer from "./navbar/navbar_container"
import HomeContainer from "./home/home_container"
import UserShowContainer from "./user/user_show_container"
import PupIndexContainer from "./pup/pup_index_container"
import PupShowContainer from "./pup/pup_show_container"
import MeetFormContainer from "./meets/meet_form_container"
import EditMeetsFormContainer from "./meets/edit_meet_form_container"
import FavoritesIndexContainer from "./favorites/favorites_index_container"
import MeetsIndexContainer from "./meets/meets_index_container"
import CreatePreferenceFormContainer from "./preferences/create_preference_form_container"
import MatchesContainer from "./preferences/matches_container"
import { Route, Switch } from "react-router-dom"
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
            <AuthRoute path="/users/:userId/:pupId/:rescueId/meet" component={MeetFormContainer} />
            <AuthRoute path="/users/:userId/meets/:meetId" component={EditMeetsFormContainer} />
            <AuthRoute path="/users/preferences/matches" component={MatchesContainer} />
            <AuthRoute path="/users/preferences" component={CreatePreferenceFormContainer} />
            <AuthRoute path="/users/:userId/meets" component={MeetsIndexContainer} />
            <AuthRoute path="/users/:userId/favorites" component={FavoritesIndexContainer}/>
            <AuthRoute path="/users/:userId" component={UserShowContainer} />
            <AuthRoute path="/pups/:rescueId/:pupId" component={PupShowContainer} />
            <AuthRoute path="/pups/index" component={PupIndexContainer} />
            <Route exact path="/" component={HomeContainer}/>
        </Switch>
        <Footer />
    </div>
);

export default App;