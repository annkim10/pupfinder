import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Matches from "./matches";
import { fetchPups } from "../../actions/pup_actions";
import { clearPreferences } from "../../actions/preference_actions";

const mapState = state => ({
    pups: Object.values(state.entities.pups),
    preferences: state.entities.preferences
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    clearPreferences: () => dispatch(clearPreferences())
})

export default withRouter(connect(mapState, mapDispatch)(Matches))
