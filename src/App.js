import "./App.css";
import Lexicon from "./Lexicon";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">Dictionary</header>
        <main>
          <Lexicon />
        </main>
        <footer className="App-footer">Coded by caro gierich</footer>
      </div>
    </div>
  );
}
