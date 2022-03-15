import logo from './logo.svg'
import './App.css'
import CounterA from './functional/CounterA'
import CounterB from './class/CounterB'
import ListA from './functional/ListA'
import ListB from './class/ListB'
import DragonFormA from './functional/DragonFormA'
import DragonFormB from './class/DragonFormB'


function App() {
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
