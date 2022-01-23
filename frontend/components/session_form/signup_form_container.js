import React from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

const mapState = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatch = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button className="other-form" onClick={() => dispatch(openModal('login'))}>
            Log in
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(SignupForm)