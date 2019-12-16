import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import GreetClass from './components/GreetClass'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Count from './components/Counter'
// import EventClick from './components/EventClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <EventClick /> */}
        {/* <ClassClick /> */}
        {/* <Count /> */}
        {/* <Message /> */}
        {/*<Greet name="Harshit" akaName="Chacha">
          <p>This is children props</p>
        </Greet>
        <Greet name="Karan" akaName="Burger">
          <button>Hungry Jacks</button>
        </Greet>
        <Hello />
        <GreetClass name="Harshit" akaName="Chacha"/>
        <GreetClass name="Karan" akaName="Burger"/> */}
      </div>
    );
  }
}

export default App;
