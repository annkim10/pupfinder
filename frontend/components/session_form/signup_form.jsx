import React from "react"

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

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>{this.props.formType}</h3>
                <br></br>
                <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
                <br></br>
                <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
                <br></br>
                <input type="number" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleChange('zipcode')}/>
                <br></br>
                <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')}/>
                <br></br>
                <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                <br></br>
                <button>Sign up</button>
            </form>
        )
    }
}

export default SignupForm