import PupIndex from "./pup_index";
import { connect } from "react-redux";
import {fetchPups} from "../../actions/pup_actions"
import { postFavorite } from "../../actions/fav_actions";

const mapState = state => ({
    pups: Object.values(state.entities.pups),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    postFavorite: favorite => dispatch(postFavorite(favorite))
    // fetchRescues: () => dispatch(fetchRescues())
})

export default connect(mapState, mapDispatch)(PupIndex)