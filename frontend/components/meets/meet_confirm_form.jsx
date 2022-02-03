import React from "react"
import {GiDogHouse} from "react-icons/gi"
import { Link, Redirect } from "react-router-dom"

//location.pathname = "/users/4/4/1/meet"
///users/:userId/:pupId/:rescueId/meet

class MeetFormConfirm extends React.Component {

    constructor(props) {
        super(props)
     
    }

    componentDidMount() {
        this.props.fetchPups()
        this.props.fetchRescues()   
    }


    render() {
    
        this.path = this.props.location.pathname.split("/")
        const pupId = parseInt(this.path[3])
        const rescueId = parseInt(this.path[4])

        const pup = this.props.pups[pupId]
        const rescue = this.props.rescues[rescueId]

        
        return (
            <div className="edit-modal-wrapper">
                <div className="confirm-wrapper">
                    <div className="confirm-form-wrapper">
                        <div className="confirm-icon"><GiDogHouse/></div>
                        <h1 className="confirm-header"><span>{pup.pupName} </span> is excited to meet you!</h1>
                        <p className="confirm-body"><span>{rescue.orgName}</span> will contact you directly to coordinate your Meet &amp; Greet.</p>
                        <Link className="confirm-button" onClick={this.props.closeModal} to="/pups/index"> Back to Pups</Link>
                    </div>
                </div>
            </div>
    )
    }
}


export default MeetFormConfirm