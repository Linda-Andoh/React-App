import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
// import Square from './components/Square';

function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer='X' />
      <Player whichPlayer='O' />
      <Board />
      {/* <Square/> */}
    </div>
  );
}

export default App;
