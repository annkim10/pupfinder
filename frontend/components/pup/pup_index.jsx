import React from "react";
import PupIndexItem from "./pup_index_item";

class PupIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchPups()
    }

    render() {
        const { pups } = this.props
        console.log("inside index", pups)
        return (
            <div className="card-div">
                {pups.map(pup => <PupIndexItem pup={pup} />)}
            </div>
        ) 
    }
}

export default PupIndex