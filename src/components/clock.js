import React, { Component } from 'react';
import Time from './time';


class Clock extends Component {
    constructor(props){
        super(props)

        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        setInterval( () => this.tick(), 1000);
    }

    tick() {
        this.setState({
        time: new Date()
    });
    }
    render() {
        return (
            <h1>This time is: <Time time={this.state.time}/> </h1>
        )
    }
}

export default Clock;