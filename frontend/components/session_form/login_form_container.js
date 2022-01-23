import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";

const mapState = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatch = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Log in
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(LoginForm)