import { connect } from "react-redux";
import Home from "./home";
import { fetchPups } from "../../actions/pup_actions";
import { fetchRescues } from "../../actions/rescue_actions"
import { postFavorite } from "../../actions/fav_actions";

const mapState = state => ({
    currentUser: state.entities.users[state.session.id],
    pups: state.entities.pups,
    rescues: state.entities.rescues
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups()),
    fetchRescues: () => dispatch(fetchRescues()),
    postFavorite: favorite => dispatch(postFavorite(favorite))
})

export default connect(mapState, mapDispatch)(Home)