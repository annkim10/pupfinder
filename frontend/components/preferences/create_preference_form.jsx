import React from "react"
import {RiCake2Line} from "react-icons/ri"
import { IoIosArrowDown } from "react-icons/io"
import {GiDogBowl, GiJumpingDog, GiHeartPlus, GiDogHouse, GiSittingDog} from "react-icons/gi"
import {FaDog} from "react-icons/fa"
import { Redirect} from "react-router-dom"



class CreatePreferenceForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
                redirect: false,
                showAgeOptions: false,
                showSizeOptions: false, 
                showGenderOptions: false,
                showActivityOptions: false, 
                showSpecialOptions: false,
                showHouseOptions: false,  
                showGoodOptions: false, 
                user_id: this.props.match.params.userId,
                age_pref: "",
                size_pref: "",
                gender_pref: "",
                activity_pref: "",
                special_needs_pref: "",
                house_trained_pref: "",
                good_with_dogs_pref: ""
            }
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
        window.scroll(0,0)
        this.setState({user_id: "this.props.currentUser.id"})
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    renderErrors() {
        return (
           <ul className="pref-error-list">
                {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
           </ul>
        )
    }

    renderButton() {
       if (this.props.formType === 'create') {
           return <button className="preference-form-button">Find my matches</button>
       } else {
           return <button className="preference-form-button">Save changes</button>
       }
    }

    renderHeader() {
        if (this.props.formType === 'create') {
            return (
                <div className="create-pref-form-header">
                    <h1>Let's find the perfect pup for you!</h1>
                    <h2>Tell us about your ideal pup </h2>
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
        window.scroll(0,0)
        e.preventDefault()
        const form = {
            user_id: this.props.currentUser.id,
            age_pref: this.state.age_pref,
            size_pref: this.state.size_pref,
            gender_pref: this.state.gender_pref,
            activity_pref: this.state.activity_pref,
            special_needs_pref: this.state.special_needs_pref,
            house_trained_pref: this.state.house_trained_pref,
            good_with_dogs_pref: this.state.good_with_dogs_pref
        }
        console.log("submitted form", this.props.errors)
        this.props.processForm(form).then(() => this.props.history.push("/users/preferences/matches"))
    }

    handleChange(e, field, options) {
        this.setState({[field]: e.target.innerText, [options]: false})
    }

    handleAgeDropdown() {
        if (this.state.showAgeOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.age.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'age_pref', 'showAgeOptions')}>
                                <input type="radio" className="radio-button" name="age" key={idx} value={pref} />
                                <label htmlFor="age">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleSizeDropdown() {
        if (this.state.showSizeOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.size.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'size_pref', 'showSizeOptions')}>
                                <input type="radio" className="radio-button" name="size" key={idx} value={pref} />
                                <label htmlFor="size">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleGenderDropdown() {
        if (this.state.showGenderOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.gender.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'gender_pref', 'showGenderOptions')}>
                                <input type="radio" className="radio-button" name="gender" key={idx} value={pref} />
                                <label htmlFor="gender">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleActivityDropdown() {
        if (this.state.showActivityOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.activity.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'activity_pref', 'showActivityOptions')}>
                                <input type="radio" className="radio-button" name="activity" key={idx} value={pref} />
                                <label htmlFor="activity">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleSpecialDropdown() {
        if (this.state.showSpecialOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.special.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'special_needs_pref', 'showSpecialOptions')}>
                                <input type="radio" className="radio-button" name="special-needs" key={idx} value={pref} />
                                <label htmlFor="special-needs">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleHouseDropdown() {
        if (this.state.showHouseOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.houseTrained.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'house_trained_pref', 'showHouseOptions')}>
                                <input type="radio" className="radio-button" name="house-trained" key={idx} value={pref} />
                                <label htmlFor="house-trained">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }

    handleGoodDropdown() {
        if (this.state.showGoodOptions) {
            return (
                <div className="pref-dropdown-options-container-active">
                        {this.goodWithDogs.map((pref, idx) => {
                            return (
                            <div className="pref-dropdown-options" onClick={(e) => this.handleChange(e, 'good_with_dogs_pref', 'showGoodOptions')}>
                                <input type="radio" className="radio-button" name="good-with-other-dogs" key={idx} value={pref} />
                                <label htmlFor="good-with-other-dogs">{pref}</label>
                            </div>
                            )
                        })}
                </div>
            )
        } else {
            return null
        }
    }


    render() {

        return (
            <div className="preference-form-outer-div">
                <div className="preference-form-inner-div">
                    <div className="preference-form-header">
                        {this.renderHeader()}
                    </div>
                    <div className="preference-form-questions-div">
                        <form className="preference-form-questions" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <div className="pref-question-div">
                                <div className="pref-question">
                                   What is your age preference?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showAgeOptions: true})}>
                                         <RiCake2Line className="pref-icon"/> { this.state.age_pref ? this.state.age_pref : 'Select age' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleAgeDropdown('age')}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    What is your size preference?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showSizeOptions: true})}>
                                        <FaDog className="pref-icon" /> { this.state.size_pref ? this.state.size_pref : 'Select size' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleSizeDropdown()}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    What is your gender preference?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showGenderOptions: true})}>
                                        <GiDogBowl className="pref-icon" /> { this.state.gender_pref ? this.state.gender_pref : 'Select gender' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleGenderDropdown()}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    How active do you want your pup to be?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showActivityOptions: true})}>
                                        <GiJumpingDog className="pref-icon" /> { this.state.activity_pref ? this.state.activity_pref : 'Select activity level' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleActivityDropdown()}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    Are you open to a special needs pup?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showSpecialOptions: true})}>
                                        <GiHeartPlus className="pref-icon" /> { this.state.special_needs_pref ? this.state.special_needs_pref : 'Special needs receptiveness?' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleSpecialDropdown()}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    Does your pup need to be house-trained?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showHouseOptions: true})}>
                                        <GiDogHouse className="pref-icon" /> { this.state.house_trained_pref ? this.state.house_trained_pref : 'House-trained?' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleHouseDropdown()}
                                </div>
                            </div>
                            <div className="pref-question-div">
                                <div className="pref-question">
                                    Do you currently have other pup(s) at home?
                                </div>
                                <div className="pref-dropdown-box">
                                    <div className="selected-pref" onClick={() => this.setState({showGoodOptions: true})}>
                                        <GiSittingDog className="pref-icon" /> { this.state.good_with_dogs_pref ? this.state.good_with_dogs_pref : 'Good with other pups?' }
                                        <IoIosArrowDown className="arrow-icon"/>
                                    </div>
                                    {this.handleGoodDropdown()}
                                </div>
                            </div>
                            {this.renderButton()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePreferenceForm