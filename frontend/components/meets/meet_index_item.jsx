import React from "react"
import {FiTrash2, FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"

class MeetIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.clicked = false
    }

    expandForm() {
        this.clicked=true
        // console.log(this.clicked)
        // return (e) => {
           return 
        // }
    }

    render() {
        const {meet, pup, rescue, deleteMeet, openModal} = this.props
        if (!meet || !pup || !rescue) return null
        
        // console.log("inside item", this.props)
        
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
                    <Link className="edit-button" to={`/users/${meet.userId}/meets/${meet.id}`}><FiEdit /></Link>
                    {/* <button className="edit-button" onClick={() => openModal('edit')}>
                        <FiEdit />
                    </button> */}
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