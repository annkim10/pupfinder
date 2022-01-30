import React from "react";
import PupIndexItem from "./pup_index_item";
import {withRouter, Link} from "react-router-dom"

class PupIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchPups()
        // this.props.fetchRescues()
    }

    render() {
        const { pups, currentUser, postFavorite } = this.props
        // console.log("inside index", rescues)
        return (
            <div className="card-div">
                {pups.map(pup => <PupIndexItem key={pup.id} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
            </div>
        ) 
    }
}

export default withRouter(PupIndex)