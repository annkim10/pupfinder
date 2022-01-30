import React from "react"
import {FaLaptop, FaPeopleArrows } from "react-icons/fa"
import { Link } from "react-router-dom"


class EditMeetForm extends React.Component {

    constructor(props) {
        super(props)
        this.startTimes = [" "].concat(this.startTimes())
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    startTimes() {
        let startTimes = []
        for (let i = 8; i <= 12; i++) {
            if (i === 12) {
            startTimes.push(`${i}:00PM`)
            } else {
                startTimes.push(`${i}:00AM`)
            }
        }

        for (let i = 1; i < 9; i++) {
            startTimes.push(`${i}:00PM`)
        }
        return startTimes
    }

    componentDidMount() {
        this.props.fetchMeets(this.props.userId)
        this.props.fetchPups()
        this.props.fetchRescues()
        // console.log("mount", this.props)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(this.props.openModal)
    }

    handleChange(field){
        return (e) => this.setState({[field]: e.target.value})
    }

    render() {
        console.log("inside edit", this.props)
        const {meet} = this.props
        
        if (!meet) {
            this.pup = null 
            this.rescue = null
        } else {
            this.pup = this.props.pups[meet.pupId]
            this.rescue = this.props.rescues[meet.orgId]
        }
    console.log("inside edit", this.pup)
        return (
            <div className="user-show-outer-div">
                <div className="user-show-inner-div">
                    <div className="user-profile">
                        <div className="edit-meet-form-div">
                            <div className="header-div">
                                <div className="pup-thumbnail-meet-div">
                                    <img className="pup-thumbnail-meet" src={this.pup.photoUrls[0]} />
                                </div>
                                <div className="meet-header"> 
                                    <h1> Edit Your Meet &amp; Greet <br/> Request with <span className="edit-span"> {this.pup.pupName}</span>
                                    </h1>
                                </div>
                            </div>
                                <div className="form-div">
                                    <form className="meet-form" onSubmit={this.handleSubmit}>
                                        <div>
                                            <label>Pup Name</label>
                                            <input className="pre-populated-values" type="text" value={this.pup.pupName} readOnly/>
                                        </div>
                                    <div>
                                        <label>Rescue Organization</label>
                                        <input className="pre-populated-values" type="text" value={this.rescue.orgName} readOnly/>
                                    </div>
                                        <div>
                                            <label> Select Date </label>
                                            <input type="date" onChange={this.handleChange('date')} defaultValue={meet.date}/>  
                                        </div>
                                        <div className="time-div"> 
                                            <div className="start-time">
                                                <label> Start Time </label>
                                                <select className="time-select" onChange={this.handleChange('start_time')}>
                                                {this.startTimes.map((time, idx) => <option key={idx}>{time}</option>)}
                                                </select>
                                            </div>
                                            <div className="end-time">
                                                <label> End Time </label>
                                                <select className="time-select" onChange={this.handleChange('end_time')}>
                                                {this.startTimes.map((time, idx) => <option key={idx}>{time}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="meeting-type-wrapper">
                                            <label> Select Meeting Type </label>
                                            <div className="meeting-type-div">
                                            <label className="container">Virtual
                                                    <input type="radio" value="virtual" name="type" onChange={this.handleChange('meeting_type')} defaultChecked="checked"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="container">In-person
                                                    <input type="radio" value="in-person" name="type" onChange={this.handleChange('meeting_type')}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>    
                                        <button className="meet-form-submit-button">Save Changes</button>   
                                        <br/>    
                                        <button className="meet-form-submit-button">Cancel Request</button>                         
                                    </form>
                                </div>
                        </div>   
                    </div>
                </div>
            </div>

           
        )
    }

}

export default EditMeetForm