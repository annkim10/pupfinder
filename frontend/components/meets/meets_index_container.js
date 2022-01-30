import { connect } from "react-redux";
import MeetsIndex from "./meets_index";
import { fetchMeets, deleteMeet } from "../../actions/meet_actions"
import { fetchRescues } from "../../actions/rescue_actions";
import { fetchPups } from "../../actions/pup_actions";
import { openModal } from "../../actions/modal_actions";


const mapState = state => ({
     currentUser: state.entities.users[state.session.id],
     meets: state.entities.meets,
     pups: state.entities.pups,
     rescues: state.entities.rescues
})

const mapDispatch = dispatch => ({
    fetchMeets: userId => dispatch(fetchMeets(userId)),
    fetchRescues: () => dispatch(fetchRescues()),
    fetchPups: () => dispatch(fetchPups()),
    deleteMeet: (userId, meetId) => dispatch(deleteMeet(userId, meetId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapState, mapDispatch)(MeetsIndex)

