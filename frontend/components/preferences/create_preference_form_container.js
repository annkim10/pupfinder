import { connect } from "react-redux";
import CreatePreferenceForm from "./create_preference_form";
import { fetchPreferences, postPreferences } from "../../actions/preference_actions";

const mapState = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    preferences: state.entities.preferences,
    formType: 'create'
})

const mapDispatch = dispatch => ({
    fetchPreferences: preferenceId => dispatch(fetchPreferences(preferenceId)),
    processForm: preferences => dispatch(postPreferences(preferences))
})


export default connect(mapState, mapDispatch)(CreatePreferenceForm)