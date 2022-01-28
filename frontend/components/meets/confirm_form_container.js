import { connect } from "react-redux";
import MeetFormConfirm from "./confirm_form";
import { closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import { fetchPups } from "../../actions/pup_actions"
import { fetchRescues } from "../../actions/rescue_actions"

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

export default connect(mapState, mapDispatch)(MeetFormConfirm)