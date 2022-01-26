import PupIndex from "./pup_index";
import { connect } from "react-redux";
import {fetchPups} from "../../actions/pup_actions"
import { fetchRescues } from "../../actions/rescue_actions"

const mapState = state => ({
    pups: Object.values(state.entities.pups),
    // rescues: state.entities.rescues
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    // fetchRescues: () => dispatch(fetchRescues())
})

export default connect(mapState, mapDispatch)(PupIndex)