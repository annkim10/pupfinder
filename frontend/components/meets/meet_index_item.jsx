import React from "react"
import {FiTrash2, FiEdit } from "react-icons/fi"

class MeetIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    // handleClick(type) {
    //     if (type === 'delete') {
    //         return (e) => {
    //             e.preventDefault()
    //             this.props.deleteMeet(this.props.meet.id)
    //         }
    //     } 
    // }

    render() {
        const {meet, pup, rescue, deleteMeet} = this.props
        if (!meet || !pup || !rescue) return null
        
        console.log("inside item", this.props)
        
        return (
        <div className="meet-item-div">
            <div className="meet-item-wrapper">
                <div className="meet-item-pup-thumb-div">
                    <img className="meet-item-pup-thumb" src={pup.photoUrls[0]} />
                </div>
                <div className="meet-item-info">
                   <h1>{pup.pupName}</h1>
                   <h3>{meet.date}, {meet.startTime}</h3>
                   <p>{rescue.orgName}</p>
                </div>
                <div className="meet-item-buttons">
                    <button className="edit-button">
                        <FiEdit />
                    </button>
                     <button className="trash-button" onClick={() => deleteMeet(meet.userId, meet.id)}>
                        <FiTrash2 />
                    </button>
                </div>
            </div>   
        </div>
        )
    }

}


export default MeetIndexItem