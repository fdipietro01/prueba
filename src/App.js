import roots from "./root.jpg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Seeker } from "./components/Seeker/Seeker";
import { ItemListContainer } from "./container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head">
          <div className="logoCont">
            <img src={roots} className="App-logo" alt="logo" />
            <p className="welc">Roots Store ©</p>
          </div>
          <Seeker />
        </div>
        <NavBar />
      </header>
      <ItemListContainer greeting="¡¡Bienvenidos a Roots Store!!"/>
      <a
        className="App-link"
        href="https://github.com/fdipietro01"
        target="_blank"
        rel="noopener noreferrer"
      >
        by Flavio Di Pietro
      </a>
    </div>
  );
}

export default App;
