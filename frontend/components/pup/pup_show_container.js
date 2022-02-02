import PupShow from "./pup_show";
import { connect } from "react-redux";
import {fetchPup} from "../../actions/pup_actions"
import {fetchRescue} from "../../actions/rescue_actions"

const mapState = (state, ownProps) => ({
    pup: state.entities.pups[ownProps.match.params.pupId],
    rescue: state.entities.rescues[ownProps.match.params.rescueId],
    pupId: parseInt(ownProps.match.params.pupId),
    user: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    fetchPup: pupId => dispatch(fetchPup(pupId)),
    fetchRescue: orgId => dispatch(fetchRescue(orgId))
})

export default connect(mapState, mapDispatch)(PupShow)