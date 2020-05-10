import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <Main />
      </div>
    )
  }
}

export default App;
