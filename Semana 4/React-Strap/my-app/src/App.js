import React from 'react';
import logo from './logo.svg';
import './App.css';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import { Player } from 'video-react';
const Example = (props) => {
  return (
    <div>
      <h1>
        Video con React
      </h1>
      <Button color="primary" onclick="window.open('http://www.google.com')" >primary</Button>{' '}
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
};

export default Example;