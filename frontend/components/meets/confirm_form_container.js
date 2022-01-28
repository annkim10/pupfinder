import { connect } from "react-redux";
import FormConfirm from "./confirm_form";
import { closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import { fetchPups } from "../../actions/pup_actions"
import { fetchRescues } from "../../actions/rescue_actions"
import { withRouter } from "react-router-dom"

const mapState = (state, ownProps) => ({
    errors: state.errors.session,
    // pup: state.entities.pups[ownProps.match.params.pupId]
})

const mapDispatch = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchPups: () => dispatch(fetchPups()),
    fetchRescues: () => dispatch(fetchRescues())
})

export default withRouter(connect(mapState, mapDispatch)(FormConfirm))