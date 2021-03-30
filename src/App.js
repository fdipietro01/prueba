
import roots from './root.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={roots} className="App-logo" alt="logo" />
        <p>
          ¡Welcome to Roots Store!
        </p>
        <a
          className="App-link"
          href="https://github.com/fdipietro01"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Flavio Di Pietro
        </a>
      </header>
    </div>
  );
}

export default App;
