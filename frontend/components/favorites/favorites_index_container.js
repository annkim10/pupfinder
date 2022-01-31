import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import FavoritesIndex from "./favorites_index";
import {fetchFavorites, deleteFavorite, postFavorite } from "../../actions/fav_actions"
import {fetchPups } from "../../actions/pup_actions"

const mapState = state => ({
    favorites: Object.values(state.entities.favorites),
    currentUser: state.entities.users[state.session.id],
    pups: state.entities.pups
})

const mapDispatch = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
    fetchPups: () => dispatch(fetchPups()),
    postFavorite: favorite => dispatch(postFavorite(favorite))
})

export default withRouter(connect(mapState, mapDispatch)(FavoritesIndex))