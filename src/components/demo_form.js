import React, { Component } from 'react';

class DemoForm extends Component {
    constructor(props) {
        super(props)

        console.log('Props:', props.email);

        this.state = {
            email: props.email || '',
            name: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', this.state);

        this.setState({
            email: '',
            name: '',
            password: '',
        });
    }

    handleChange(event) {
        console.dir(event.target);
        // console.dir('Event Object:', event.target);

        this.setState({
            [event.target.name]: event.target.value,
        });

        // switch(event.target.name) {
        //     case 'email': 
        //         this.setState({email: event.target.value});
        //         break;
        //     case 'name':
        //         this.setState({name: event.target.value});
        //         break;
        //     case 'password':
        //         this.setState({password: event.target.value});
        //         break;
        // } 
    }

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email</label>
                    <input onChange = {this.handleChange} type="text" name="email" value= { this.state.email } autoComplete="off"/>
                </div>
                <div>
                    <label>Name</label>
                    <input onChange={this.handleChange} type="text" name="name" value={ this.state.name } autoComplete="off"/>
                </div>

                <div>
                    <label>Password</label>
                    <input  onChange = {this.handleChange} type="password" name="password" value = { this.state.password }/>
                </div>

                <button>Submit Form</button>
            </form>
        )    
    }
}

export default DemoForm;