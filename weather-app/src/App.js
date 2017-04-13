import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './Animations/Animations.scss';
//import Weather from './Weather/Weather.js'
// import Tile from './Tile/Tile.js';
// import Contour from './Contour/Contour.js'
import Body from './Body/Body.js';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="clouds">
            <div id="cloud-intro"></div>
          </div>
        </div>

          
        
          
          <Body />

      </div>
    );
  }
}

export default App;
