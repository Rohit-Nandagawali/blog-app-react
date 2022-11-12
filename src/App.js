
import './App.css';
import Home from '../src/Home/Home';
import Navbar from "../src/Navbar/Navbar" 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
