import PupIndex from "./pup_index";
import { connect } from "react-redux";
import {fetchPups} from "../../actions/pup_actions"

const mapState = state => ({
    pups: Object.values(state.entities.pups)
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups())
})

export default connect(mapState, mapDispatch)(PupIndex)