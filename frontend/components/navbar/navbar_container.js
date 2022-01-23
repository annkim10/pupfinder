import { connect } from "react-redux";
import Greetings from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"

const mapState = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapState, mapDispatch)(Greetings)