import "./App.css";
import Lexicon from "./Lexicon";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">Lexicon</header>
        <main>
          <Lexicon defaultInputword="Troll" />
        </main>
        <footer className="App-footer mt-5">
          {" "}
          Coded by caro gierich, open source code on{" "}
          <a
            href="https://github.com/OlgaMilemis/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
