import { connect } from "react-redux";
import Home from "./home";

const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
})


export default connect(mapState, null)(Home)