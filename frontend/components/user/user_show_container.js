import { connect } from "react-redux";
import UserShow from "./user_show";

const mapState = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(UserShow)