import { connect } from "react-redux";
import PreferenceForm from "./preference_form";
import { fetchPreferences, postPreferences } from "../../actions/preference_actions";

const mapState = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    preferences: state.entities.users[state.session.id].preferences,
    prefForm: {
            user_id: ownProps.match.params.userId,
            age_pref: "",
            size_pref: "",
            gender_pref: "",
            activity_pref: "",
            special_needs_pref: "",
            house_trained_pref: "",
            good_with_dogs_pref: ""
        },
    formType: 'create'
})

const mapDispatch = dispatch => ({
    fetchPreferences: preferenceId => dispatch(fetchPreferences(preferenceId)),
    processForm: preferences => dispatch(postReferences(preferences))
})


export default connect(mapState, mapDispatch)(PreferenceForm)