import React from "react"
import { GiDogHouse } from "react-icons/gi"
import { Link } from "react-router-dom"
import { closeModal } from "../../actions/modal_actions"
import { connect } from "react-redux"


class EditConfirm extends React.Component {

    constructor(props) {
        super(props)
        console.log("inside edit confirm", this.props)
    }

    render() {
        return (
         <div className="edit-modal-wrapper">
                <div className="confirm-wrapper">
                    <div className="confirm-form-wrapper">
                        <div className="confirm-icon"><GiDogHouse/></div>
                        <p className="confirm-body">Your Meet &amp; Greet has been canceled.</p>
                        <Link className="confirm-button" onClick={this.props.closeModal} to="/pups/index"> Back to Pups</Link>
                    </div>
                </div>
            </div>
        )
    }

}


const mapDispatch = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatch)(EditConfirm)