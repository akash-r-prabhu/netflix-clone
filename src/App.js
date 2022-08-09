import logo from './logo.svg';
import './App.css';
import Row from './Row';
function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl="" />
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
