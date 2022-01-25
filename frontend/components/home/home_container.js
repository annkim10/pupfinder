import { connect } from "react-redux";
import Home from "./home";
import { fetchPups } from "../../actions/pup_actions";

const mapState = state => ({
    currentUser: state.entities.users[state.session.id],
    pups: state.entities.pups
})

const mapDispatch = dispatch => ({
    fetchPups: () => dispatch(fetchPups())
})

export default connect(mapState, mapDispatch)(Home)