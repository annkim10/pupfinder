import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Matches from "./matches";
import { fetchPups } from "../../actions/pup_actions";
import { fetchAllPreferences } from "../../actions/preference_actions";

const mapState = state => ({
    pups: state.entities.pups, 
    preferences: Object.values(state.entities.preferences)[0]
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    fetchAllPreferences: () => dispatch(fetchAllPreferences())
})

export default withRouter(connect(mapState, mapDispatch)(Matches))
