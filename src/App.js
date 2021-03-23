import logo from "./logo.svg";
// import "./App.css";
import MyFirstComp from "./component/MyFirstComp";
import MySecondComp from "./component/MySecondComp";

function App() {
  const user = {
    name: "Mango",
  };
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
      <MyFirstComp user={user} />
      <MySecondComp user={user} />
    </div>
  );
}

export default App;
