import React from "react"
import {FaLaptop, FaPeopleArrows } from "react-icons/fa"
import { Link } from "react-router-dom"


class EditMeetForm extends React.Component {

    constructor(props) {
        super(props)
        this.startTimes = [" "].concat(this.startTimes())
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateMin = null
        this.dateMax = null
        this.state = this.props.meet
        this.handleCancel = this.handleCancel.bind(this)
        console.log("edit construct", this.props)
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

    endTime(startTime) {
            var idx = this.startTimes.indexOf(startTime)
            if (idx !== this.startTimes.length-1) {
                var endTime = this.startTimes[(idx+1) % this.startTimes.length]
                return endTime
            } else {
                return '9:00PM'
            }
    }

    setDateRange(){
        const date = new Date()
        let z = n => ('0' + n).slice(-2)
        var [month, day, year] = [z(date.getMonth()+1), date.getDate(), date.getFullYear()];
       
        this.min = `${year}-${month}-${day}`
        this.max = `${year + 1}-${month}-${day}`
    }

    componentDidMount() {
        this.props.fetchMeets(this.props.userId)
        this.props.fetchPups()
        this.props.fetchRescues()
        this.setDateRange()
        // console.log("mount", this.props)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    // processForm:(userId, meetId, meet) => dispatch(updateMeet(userId, meetId, meet)),
    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.props.userId, this.props.meet.id, this.state).then(this.props.openModal)
    }

    handleChange(field) {
        if (field === 'start_time') {
            return (e) => this.setState({[field]: e.target.value, end_time: this.endTime(e.target.value)})
        } else {
            return (e) => this.setState({[field]: e.target.value})
        }
    }

    handleCancel(e) {
        e.preventDefault()
        this.props.deleteMeet(this.props.userId, this.props.meet.id).then(this.props.openModal('edit'))
    }

    renderErrors() {
        return (
           <ul className="meet-error-list">
                {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
           </ul>
        )
    }

    render() {
        // console.log("inside edit", this.props)
        const {meet} = this.props
        
        if (!meet) {
            this.pup = null 
            this.rescue = null
        } else {
            this.pup = this.props.pups[meet.pupId]
            this.rescue = this.props.rescues[meet.orgId]
        }

        return (
            <div className="user-show-outer-div">
                <div className="user-show-inner-div">
                    <div className="user-profile">
                        <div className="edit-meet-form-div">
                            {this.renderErrors()}
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
                                            <input type="date" onChange={this.handleChange('date')} defaultValue={meet.date} min={this.min} max={this.max}/>  
                                        </div>
                                        <div className="time-div"> 
                                            <div className="start-time">
                                                <label> Start Time </label>
                                                <select className="time-select" onChange={this.handleChange('start_time')}>
                                                {this.startTimes.map((time, idx) => <option key={idx}>{time} </option>)}
                                                </select>
                                            </div>
                                            <div className="end-time">
                                                <label> End Time </label>
                                                <input id="end-time-select" type="text" defaultValue={meet.end_time} />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="meet-time-note">All Meet &amp; Greets are scheduled for 1 hour. You may request to change the time of your appointment with the rescue organization. </p>
                                        </div>
                                        <div className="meeting-type-wrapper">
                                            <label> Select Meeting Type </label>
                                            <div className="meeting-type-div">
                                            <label className="container">Virtual
                                                    <input type="radio" value="virtual" name="type" onChange={this.handleChange('meeting_type')} defaultChecked={ meet.meetingType === 'virtual' ? "checked" : "" }/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="container">In-person
                                                    <input type="radio" value="in-person" name="type" onChange={this.handleChange('meeting_type')} defaultChecked={ meet.meetingType === 'in-person' ? "checked" : "" }/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>   
                                        <div className="edit-form-buttons">
                                            <button className="edit-form-submit-button">Save Changes</button>   
                                            <br/>    
                                            <button className="edit-form-submit-button" onClick={this.handleCancel}>Cancel Request</button>   
                                        </div> 
                                                            
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