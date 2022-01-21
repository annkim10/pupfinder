import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

const mapState = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatch = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapState, mapDispatch)(SignupForm)