
import './App.css';
import Home from '../src/Home/Home';
import Create from '../src/Create/Create';
import Navbar from "../src/Navbar/Navbar" 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
