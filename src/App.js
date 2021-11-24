import logo from './logo.svg';
import './App.css';
import FruitsPage from './store/modules/fruits/actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="w3-container">
        <img src={logo} className="App-logo" alt="logo" />
        <FruitsPage/>
        </div>

     
      </header>
    </div>
  );
}

export default App;
