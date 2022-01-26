import PupShow from "./pup_show";
import { connect } from "react-redux";
import {fetchPup} from "../../actions/pup_actions"
import {fetchRescue} from "../../actions/rescue_actions"

const mapState = (state, ownProps) => ({
    pup: state.entities.pups[ownProps.match.params.pupId],
    rescue: state.entities.rescues[state.entities.pups[ownProps.match.params.pupId].orgId],
    pupId: parseInt(ownProps.match.params.pupId)
})

const mapDispatch = dispatch => ({
    fetchPup: pupId => dispatch(fetchPup(pupId)),
    fetchRescue: orgId => dispatch(fetchRescue(orgId))
})

export default connect(mapState, mapDispatch)(PupShow)