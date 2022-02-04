import React from "react"
import PupIndexItem from "../pup/pup_index_item"
import { Link } from "react-router-dom"

class FavoritesIndex extends React.Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.fetchFavorites(this.props.currentUser.id)
        this.props.fetchPups()
    }

    renderFavorites(favPups) {
        const {favorites, pups, currentUser, postFavorite, deleteFavorite} = this.props

        if (favPups.length === 0) {
            return (
                <h1 className="no-fav-message">
                    You're missing pups! 
                    <Link to="/pups/index" className="no-fav-message-link"> Find pups to favorite.</Link>
                </h1>
            )
        } else {
            return (
                <div className='fav-card-div'>
                    {favPups.map((pup, idx) => <PupIndexItem key={idx} favorites={favorites} deleteFavorite={deleteFavorite} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                </div>
            )
        }
    }

    render() {

        const {favorites, pups, currentUser, postFavorite, deleteFavorite} = this.props

        if (!favorites || !pups || !currentUser ) {
            return null
        } else {
            var favArr = Object.values(favorites)
            var favPups = favArr.map(fav => pups[fav.pupId])
        }
        
        return (
            <div className="user-show-outer-div">
                    <div className="user-show-inner-div">
                        <div className="user-profile">
                            <div className="fav-index-container">
                                <h1 className='fav-index-header'>My Favorite Pups <span className="num-fav-pups">{favPups.length}</span> </h1>
                                <ul className="fav-card-container">
                                    {this.renderFavorites(favPups)}
                                    {/* <div className='fav-card-div'>
                                        {favPups.map((pup, idx) => <PupIndexItem key={idx} favorites={favorites} deleteFavorite={deleteFavorite} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                                    </div> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default FavoritesIndex
