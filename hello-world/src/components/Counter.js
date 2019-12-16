import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    increment() {
        // this.state.count += 1 : Never modify the state directly so we use setState
        // this.setState(
        //     {
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('Callback Value', this.state.count);
        // }
        // )
        // console.log('Synchronous', this.state.count);
        // Whenever a code to be executed when a state has been change,
        // don't write that code after the setState method, instead write them
        // within the method as a callback function which is a second parameter to setState method.
        
        // When you have to update the state based on the previous state
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
