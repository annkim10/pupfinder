import React from "react"


// const MeetFormConfirm = (props) => {
//     console.log(props)
    
//     return (
//         <div className="modal-wrapper">
//             <div className="confirm-wrapper">
//                 <div className="close-x">
//                         <button onClick={() => props.closeModal()}>X</button>
//                 </div>
//                 <h1>{props.pup} is excited to meet you!</h1>
//                 <p>Rescue will contact you directly to coordinate your Meet &amp; Greet.</p>
//             </div>
//         </div>
//     )

// }


class MeetFormConfirm extends React.Component {

    componentDidMount() {
        this.props.fetchPups()
        this.props.fetchRescues()
    }

    render() {
    console.log("inside confirm", this.props)
    
    const {pup} = this.props
    if (!pup) return null

    return (
        <div className="modal-wrapper">
            <div className="confirm-wrapper">
                <div className="close-x">
                        <button onClick={() => props.closeModal()}>X</button>
                </div>
                <h1> is excited to meet you!</h1>
                <p>Rescue will contact you directly to coordinate your Meet &amp; Greet.</p>
            </div>
        </div>
    )
    }
}


export default MeetFormConfirm