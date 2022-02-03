import React from "react";
import PupIndexItem from "./pup_index_item";
import {withRouter, Link} from "react-router-dom"
import {RiFilter3Fill} from "react-icons/ri"
import FilterPups from "../filter/filter_pups";

class PupIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchPups()
        this.props.fetchFavorites(this.props.currentUser.id)
        // this.props.fetchRescues()
    }

 

    render() {
        const { pups, currentUser, postFavorite, deleteFavorite, favorites, filterPups  } = this.props
        // console.log("inside index", favorites)
        return (
            <div className="index-div">
                <div className="filter-wrapper">
                    <div className="filter-div">
                        <h1> <RiFilter3Fill className="filter-icon"/> FILTER </h1>
                        <FilterPups filterPups={filterPups} />
                    </div>
                </div>
                <div className="card-div">
                    {pups.map(pup => <PupIndexItem key={pup.id} favorites={favorites} deleteFavorite={deleteFavorite} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                </div>
            </div>
        ) 
    }
}

export default withRouter(PupIndex)