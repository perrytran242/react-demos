import React, { Component } from 'react';

class SigninForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = (event) => {
        console.log('Current Target Value:', event.target.value);
        console.log('Current Target Name:', event.target.name);

        this.setState({
            [event.target.name] : event.target.value,
        })

    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Form:', this.state);

        this.setState({
            email: '',
            password: '',
        })
    }
    render() {
        return (
            <form onSubmit= { this.handleFormSubmit } >
                <h1>Sign up Form</h1>
                <div>
                    <label>Email</label>
                    <input onChange={this.handleChange} type="text" name="email" value= { this.state.email }/>
                </div>

                <div>
                    <label>Password</label>
                    <input onChange = {this.handleChange} type="text" name="password" value= { this.state.password }/>
                </div>
                <button>Sign Up</button>
            </form>
        )
    }
}

export default SigninForm;