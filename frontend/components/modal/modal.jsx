import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SignupFormContainer from "../session_form/signup_form_container"
import LoginFormContainer from "../session_form/login_form_container"
import ConfirmFormContainer from "../meets/confirm_form_container"
import EditConfirm from "../meets/edit_confirm";

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'meet':
      component = <ConfirmFormContainer />;
      break;
    case 'edit-cancel':
      component = <EditConfirm type="cancel" />;
      break;
    default:
      return null;
  }

    if (modal === 'edit') {
      return (
      <div className="modal-background" >
        <div className="modal-child">
          { component }
        </div>
      </div>
      );
    } else {
    return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      );
  }

  
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);