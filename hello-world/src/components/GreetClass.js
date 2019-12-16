import React, {Component} from 'react'

class GreetClass extends Component {
    render() {
        // const {name, heroName} = this.props
        return (
            <h1>
                Class Component {this.props.name} a.k.a {this.props.akaName}
                {/* Class Component {name} a.k.a {akaName} */}
            </h1>
        )
    }
}

export default GreetClass

// Commented lines are use to show destructuring class components