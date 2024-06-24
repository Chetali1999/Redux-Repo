
import './App.css';
import Counter from './Componenets/Redux/Counter/Counter';
import CounterMessage from './Componenets/Redux/Counter/CounterMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <CounterMessage />
      </header>
    </div>
  );
}

export default App;
