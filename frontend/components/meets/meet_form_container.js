import { connect } from "react-redux";
import Meet from "./meet_form"
import { fetchPups } from "../../actions/pup_actions";
import { postMeet } from "../../actions/meet_actions"
import { fetchRescues } from "../../actions/rescue_actions"
import { openModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/meet_actions";

export const mapState = (state, ownProps) => ({
    pup: state.entities.pups[ownProps.match.params.pupId],
    rescue: state.entities.rescues[ownProps.match.params.rescueId],
    userId: state.session.id,
    errors: state.errors.meets
    // meet: {
    //         pup_id: parseInt(this.props.match.params.pupId),
    //         user_id: parseInt(this.props.match.params.userId),
    //         org_id: parseInt(this.props.match.params.rescueId),
    //         date: "",
    //         meeting_type: "",
    //         start_time: "",
    //         end_time: ""
    //     }
})

export const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    fetchRescues: () => dispatch(fetchRescues()),
    processForm: meet => dispatch(postMeet(meet)),
    openModal: () => dispatch(openModal('meet')),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapState, mapDispatch)(Meet)