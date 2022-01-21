import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";

const mapState = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatch = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(LoginForm)