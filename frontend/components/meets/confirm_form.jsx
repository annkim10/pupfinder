import React from "react"


class MeetFormConfirm extends React.Component {

    componentDidMount() {
        this.props.fetchPups()
        this.props.fetchRescues()
    }

    render() {
    console.log("inside confirm", this.props)
    
    // const {pup} = this.props
    // if (!pup) return null

    return (
        <div className="modal-wrapper">
            <div className="confirm-wrapper">
                <div className="form-wrapper">
                    <h1> is excited to meet you!</h1>
                    <p>Rescue will contact you directly to coordinate your Meet &amp; Greet.</p>
                </div>
                
            </div>
        </div>
    )
    }
}


export default MeetFormConfirm