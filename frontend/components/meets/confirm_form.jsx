import React from "react"


const MeetFormConfirm = () => {

    return (
        <div className="modal-wrapper">
            <div className="form-wrapper">
                <div className="close-x">
                        <button onClick={this.props.closeModal}>X</button>
                </div>
                <p>Is so excited to meet you!</p>
            </div>
        </div>
    )

}

export default MeetFormConfirm 