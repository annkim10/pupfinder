import React from "react"
import Modal from "react-modal"

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemo = this.loginDemo.bind(this)
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

    loginDemo() {
        const demoUser = {
            email: "demouser@demo.com",
            password: "password"
        }
        this.setState( {email: demoUser.email, password: demoUser.password} )
        this.props.processForm(this.state).then(this.props.closeModal)
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
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange('email')}/>
                        <br/>
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                        <br/><br/>
                        <button className="form-button">Log in</button>
                        <br/><br/>
                        <div className="demo-login-div">
                            <button className="form-button" onClick={this.loginDemo}>Demo Login</button>
                        </div>
                        {this.renderErrors()}
                    </form>
                    <div className="other-form-link">
                        <p>Need an account? <span>{this.props.otherForm}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm