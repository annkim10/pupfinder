import React from "react"
import PupIndexItem from "../pup/pup_index_item"

class FavoritesIndex extends React.Component {

    componentDidMount() {
        this.props.fetchFavorites(this.props.currentUser.id)
        this.props.fetchPups()
    }

    render() {
        console.log("inside fav index", this.props)

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
                                    <div className='fav-card-div'>
                                        {favPups.map((pup, idx) => <PupIndexItem key={idx} favorites={favorites} deleteFavorite={deleteFavorite} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default FavoritesIndex
