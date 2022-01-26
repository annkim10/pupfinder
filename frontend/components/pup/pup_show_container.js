import PupShow from "./pup_show";
import { connect } from "react-redux";
import {fetchPup} from "../../actions/pup_actions"
import {fetchRescue} from "../../actions/rescue_actions"

const mapState = (state, ownProps) => ({
    pup: state.entities.pups[ownProps.match.params.pupId],
    pupId: parseInt(ownProps.match.params.pupId)
})

const mapDispatch = dispath => ({
    fetchPup: pupId => dispath(fetchPup(pupId)),
    fetchRescue: 
})

export default connect(mapState, mapDispatch)(PupShow)