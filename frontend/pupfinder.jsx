import React from "react"
import ReactDom from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"

import { fetchRescue, fetchRescues, receiveRescues } from "./actions/rescue_actions"
import * as RescueUtil from "./utils/rescue_api_util"


document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }           
        }
        store = configureStore(preloadedState);
        delete window.currentUser
    } else {
        store = configureStore()
    }

    const root = document.getElementById("root")
    ReactDom.render(<Root store={store} />, root)

    window.store = store
    window.RescueUtil = RescueUtil.fetchRescues
    window.fetchRescues = fetchRescues
    window.receiveRescues = receiveRescues

})
