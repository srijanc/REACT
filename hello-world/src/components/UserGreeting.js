import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true // or false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Srjian, Short Circuit Operator</div>

        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Srijan</div>)
        //     :
        //     (<div>Welcome Guest</div>)
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Srijan</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if (this.state.inLoggedIn) {
        //     return <div>Welcome Srijan</div>
        //     }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         Welcome Srijan
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting
