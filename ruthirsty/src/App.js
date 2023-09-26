import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 id = "header">RU Thirsty</h1>
        <h2>Where RU?</h2>

        <a id = "busch" href="https://www.example.com" class="clickable-box">
          <div>
            Busch
          </div>
        </a>

        <a id = "livi" href="https://www.example.com" class="clickable-box">
          <div>
            Livingston
          </div>
        </a>

        <a id = "ca" href="https://www.example.com" class="clickable-box">
          <div>
            C/A
          </div>
        </a>

        <a id = "cd" href="https://www.example.com" class="clickable-box">
          <div>
            C/D
          </div>
        </a>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
        </a>
      </header>
    </div>
  );
}

export default App;
