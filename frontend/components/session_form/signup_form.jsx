import React from "react"
import { Link } from "react-router-dom"

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            zipcode: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    renderErrors() {
        return (
           <ul className="error-list">
                {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
           </ul>
        )
    }

    render() {
        return (
            <div className="modal-wrapper">
                <div className="form-wrapper" >
                     <div className="close-x">
                    <button onClick={this.props.closeModal}>X</button>
                    </div>
                    <h1 className="form-header">{this.props.formType}</h1>
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
                        <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
                        <input type="number" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleChange('zipcode')}/>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')}/>
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                        <button className="form-button">Sign up</button>
                    </form>
                    <div className="other-form-link">
                        <p>Already have an account? <span>{this.props.otherForm}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm