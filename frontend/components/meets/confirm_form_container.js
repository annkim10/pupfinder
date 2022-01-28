import { connect } from "react-redux";
import MeetFormConfirm from "./confirm_form";


const mapState = state => ({
    errors: state.errors.session,
})

const mapDispatch = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapState, mapDispatch)(MeetFormConfirm)