import './App.css';
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';

function App () {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
