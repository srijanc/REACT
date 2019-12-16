import React, {Component} from 'react'

class Message extends Component {

    // State object will be inside the constructor
    constructor() {
        super()
        this.state = {
            message: 'Welcome Myself'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                {/* This is to alter the state of class component */}
                <button onClick={() => this.changeMessage()}>Subscibe</button>
            </div>
        )
    }
}

export default Message