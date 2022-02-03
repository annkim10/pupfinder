import { connect } from "react-redux";
import CreatePreferenceForm from "./create_preference_form";
import { fetchPreferences, postPreferences } from "../../actions/preference_actions";
import { withRouter } from "react-router-dom";
import { clearErrors } from "../../actions/session_actions";

const mapState = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    preferences: state.entities.preferences,
    formType: 'create',
    errors: state.errors.session
})

const mapDispatch = dispatch => ({
    fetchPreferences: preferenceId => dispatch(fetchPreferences(preferenceId)),
    processForm: preferences => dispatch(postPreferences(preferences)),
    clearErrors: () => dispatch(clearErrors())
})


export default withRouter(connect(mapState, mapDispatch)(CreatePreferenceForm))