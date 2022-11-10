
import './App.css';
import Home from '../src/Home/Home';
import Navbar from "../src/Navbar/Navbar" 

function App() { 
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
