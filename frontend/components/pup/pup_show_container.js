import PupShow from "./pup_show";
import { connect } from "react-redux";
import {fetchPup} from "../../actions/pup_actions"

const mapState = (state, ownProps) => ({
    pup: state.pups[ownProps.match.params.pupId]
})

const mapDispatch = dispath => ({
    fetchPup: pupId => dispath(fetchPup(pupId))
})

export default connect(mapState, mapDispatch)(PupShow)