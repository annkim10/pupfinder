import React from "react"

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
                <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')}/>
                <br></br>
                <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                <br></br>
                <button>Log in</button>
            </form>
        )
    }
}

export default LoginForm