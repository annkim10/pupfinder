import React from 'react'
import { render } from 'react-dom'
import MeetIndexItem from './meet_index_item'


class MeetsIndex extends React.Component {

    componentDidMount(){
        this.props.fetchMeets(this.props.currentUser.id)
        this.props.fetchRescues()
        this.props.fetchPups()
    }

    render() {
        // console.log(this.props)
        const meets = Object.values(this.props.meets)
        const {pups, rescues, deleteMeet, openModal } = this.props
        if (!meets) return null
        if (!pups || !rescues) return null
        // console.log("inside meet index", this.props)

        return (
                <div className="user-show-outer-div">
                    <div className="user-show-inner-div">
                        <div className="user-profile">
                            <div className="meet-container">
                                <h1 className='meet-index-header'>My Meet &amp; Greets</h1>
                                <ul>
                                    <div className='meet-grid'>
                                        {meets.map(meet => <MeetIndexItem key={meet.id} meet={meet} 
                                        pup={pups[meet.pupId]} openModal={openModal} deleteMeet={deleteMeet} rescue={rescues[meet.orgId]}/>)}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default MeetsIndex