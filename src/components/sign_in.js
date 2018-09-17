import React, { Component } from 'react';

class SigninForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }
    handleChange(event) {
        const { name, value } = event.target;

        const { form } = this.state;

        this.setState( {form: {[name]: value}} )
    }
    handleFormSubmit() {
        event.preventDefault();
        console.log('called handleformsubmit', this.state.form);

        const newState = {
            form: {
                email: '',
                password: '',
            }
        }
        this.setState(newState);
    }
    render() {
        const { email, password } = this.state.form;
        return (
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <div>
                    <label>Email</label>
                    <input type="email" value= { email } name="email" onChange= { (event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value= { password } name="password" onChange= { (event) => this.handleChange(event)}/>
                </div>
                <button>Sign In</button>
            </form>
        )
    }
}

export default SigninForm;