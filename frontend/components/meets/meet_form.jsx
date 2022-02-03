import React from "react"
import {FaLaptop, FaPeopleArrows } from "react-icons/fa"
import { Link } from "react-router-dom"

class Meet extends React.Component {

    constructor(props) {
        super(props)
        // this.state = this.props.meet
        this.dateMin = null
        this.dateMax = null
        this.state = {
            pup_id: parseInt(this.props.match.params.pupId),
            user_id: parseInt(this.props.match.params.userId),
            org_id: parseInt(this.props.match.params.rescueId),
            date: "",
            meeting_type: "",
            start_time: "",
            end_time: ""
        }
        this.startTimes = [" "].concat(this.startTimes())
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPups()
        this.props.fetchRescues()
        this.setDateRange()

    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    setDateRange(){
        const date = new Date()
        let z = n => ('0' + n).slice(-2)
        var [month, day, year] = [z(date.getMonth()+1), date.getDate(), date.getFullYear()];
       
        this.min = `${year}-${month}-${day}`
        this.max = `${year + 1}-${month}-${day}`
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

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(this.props.openModal)
    }

    handleChange(field) {
        if (field === 'start_time') {
            return (e) => this.setState({[field]: e.target.value, end_time: this.endTime(e.target.value)})
        } else {
            return (e) => this.setState({[field]: e.target.value})
        }
    }


    renderErrors() {
        return (
           <ul className="meet-error-list">
                {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
           </ul>
        )
    }

    render() {
        const { pup, rescue } = this.props

        if (!pup) return null 
        if (!rescue) return null
        return (
            <div className="meet-greet-form-div">
                    <div className="header-div">
                        <div className="pup-thumbnail-meet-div">
                            <img className="pup-thumbnail-meet" src={pup.photoUrls[0]} />
                        </div>
                        <div className="meet-header"> 
                            <h1> Meet &amp; Greet Request <br/> for <span className="meet-header-span"> {pup.pupName}</span>
                            </h1>
                        </div>
                    </div>
                        <div className="form-div">
                            <form className="meet-form" onSubmit={this.handleSubmit}>
                                {this.renderErrors()}
                                <div>
                                    <label>Pup Name</label>
                                    <input id="pre-populated-values" type="text" value={pup.pupName} readOnly/>
                                </div>
                               <div>
                                <label>Rescue Organization</label>
                                <input id="pre-populated-values" type="text" value={rescue.orgName} readOnly/>
                               </div>
                                <div>
                                    <label> Select Date </label>
                                    <input id="date-input" type="date" onChange={this.handleChange('date')} min={this.min} max={this.max} />  
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
                                        <input id="end-time-select" type="text" defaultValue={this.state.end_time} />
                                    </div>
                                </div>
                                <div>
                                    <p className="meet-time-note">All Meet &amp; Greets are scheduled for 1 hour. You may request to change the time of your appointment with the rescue organization. </p>
                                </div>
                                <div className="meeting-type-wrapper">
                                    <label> Select Meeting Type </label>
                                    <div className="meeting-type-div">
                                       <label className="container">Virtual
                                            <input type="radio" value="virtual" name="type" onChange={this.handleChange('meeting_type')} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">In-person
                                            <input type="radio" value="in-person" name="type" onChange={this.handleChange('meeting_type')}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>    
                                <button className="meet-form-submit-button">Submit Request</button>                        
                            </form>
                        </div>
                </div>   
        )
    }

}

export default Meet