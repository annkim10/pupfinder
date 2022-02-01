import React from "react"

//currentuser


class PreferenceForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.prefForm
        this.age = ['No Preference', 'Puppy', 'Adult', 'Senior']
        this.size = ['No Preference', 'Small', 'Medium', 'Large']
        this.gender = ['No Preference', 'Female', 'Male']
        this.activity = ['No Preference', 'Active', 'Very Active', 'Laid-back']
        this.special = ['No Preference', 'Open', 'Not Open']
        this.houseTrained = ['No Preference', 'Yes', 'No']
        this.goodWithDogs = ['No Preference', 'Yes', 'No']
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({user_id: "this.props.currentUser.id"})
    }

    renderHeader() {
        if (this.props.formType === 'create') {
            return (
                <div className="create-pref-form-header">
                    <h1>Let's find the perfect pup for you!</h1>
                    <h2>What are your preferences? </h2>
                </div>
            )
        } else {
            return (
                <div className="edit-pref-form-header">
                    <h1>Edit Your Adopter Profile</h1>
                </div>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
    }   

    handleChange(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    renderButton() {
       if (this.props.formType === 'create') {
           return <button className="preference-form-button">Find my matches</button>
       } else {
           return <button className="preference-form-button">Save changes</button>
       }
    }

    render() {
        console.log("inside pref form", this.props)

        return (
            <div className="preference-form-outer-div">
                <div className="preference-form-inner-div">
                    <div className="preference-form-header">
                        {this.renderHeader()}
                    </div>
                    <div className="preference-form-questions-div">
                        <form className="preference-form-questions">
                            <div className="age-pref-div">
                                <label>Age preference</label>
                                <select className="pref-dropdown">
                                    {this.age.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            <div className="size-pref-div">
                                <label>Size preference</label>
                                <select className="pref-dropdown">
                                    {this.size.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                                <p> 
                                    Small <span className="size-span">0-25lbs </span>
                                    Medium <span className="size-span">26-60lbs </span>
                                    Large <span className="size-span">61+lbs</span>
                                </p>
                            </div>
                            <div className="gender-pref-div">
                                <label>Gender preference</label>
                                <select className="pref-dropdown">
                                    {this.gender.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            <div className="activity-pref-div">
                                <label>Activity level preference</label>
                                <select className="pref-dropdown">
                                    {this.activity.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            <div className="special-pref-div">
                                <label>Special needs receptiveness</label>
                                <select className="pref-dropdown">
                                    {this.special.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            <div className="house-trained-pref-div">
                                <label>House-trained preference</label>
                                <select className="pref-dropdown">
                                    {this.houseTrained.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            <div className="good-with-dogs-pref-div">
                                <label>Good with other dogs</label>
                                <select className="pref-dropdown">
                                    {this.goodWithDogs.map((pref, idx) => <option key={idx}>{pref}</option>)}
                                </select>
                            </div>
                            {this.renderButton()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreferenceForm