import { render } from '@testing-library/react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import { Component } from 'react';
import avatar from './avatar.png';

function Logo(props){
  const logoPic = <img src={avatar}/>
  return logoPic;
}

// moved this function to components/Greet.js
// function Greet() {
//   return (
//     <h1>Hellooo there</h1>
//   )
//}

// changed App from a function component to a class component
class App extends Component {
  render() {
    return(
      <div className="App">
        <Counter />
        {/* <Message />
      <Greet name="wakeel" age="22">
        <p>this is a children probs</p>
      </Greet>
      <Greet name="aly" age="17">
        <button>Action</button>
      </Greet>
      <Greet name="mariam" age="3"/>
      <Welcome name="wakeel" age="22" />,
      <Hello />
      <Logo/> */}
      </div>
    )
  }

}

export default App;


/*
render() {
    return (
      <div className='App'>
      <Greet />,
      <Welcome />
      </div>
    );
  }
*/