import React from 'react'

// function Greet(){
//     return <h1>Hello Srijan</h1>
// }

// Using arrow function with functional component
//const Greet = () => <h1>Hello Srijan from Functional Component</h1>

// Using props
// const Greet = props => {
//     console.log(props);
//     return (
//         <div>
//             <h1>
//                 Hello {props.name} a.k.a {props.akaName} from Functional Component
//             </h1>
//             {props.children}
//         </div>
//     )
// }

// Using destructuring
const Greet = ({name, akaName}) => {
    console.log(props);
    return (
        <div>
            <h1>
                Hello {name} a.k.a {akaName} from Functional Component
            </h1>
        </div>
    )
}

// Destructuring in function body
// const Greet = props => {
//     const {name, heroName} = props
//     console.log(props);
export default Greet    // Using default to enable use of any name while importing in app.js