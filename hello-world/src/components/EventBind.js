import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this) // Binding in class constructor
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: "Good Bye!!!"
    //     })
    //     console.log(this);
        
    // }

    clickHandler = () => {
        this.setState({
            message: "Good Bye!!!"
        })
    }

    render() {
        return (
            <div>{this.state.message}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Binding in render() */}

                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* Arrow function in render */}

                <button onClick={this.clickHandler}>Click</button>
                {/* Binding in Class constructor */}
            </div>
        )
    }
}

export default EventBind
