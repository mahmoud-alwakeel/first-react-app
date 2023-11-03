import { render } from '@testing-library/react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import { Component } from 'react';

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
      <Greet />,
      <Welcome />
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