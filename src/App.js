import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/explore">
        <Home></Home>
        </Route>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/register">
        <Register></Register>
        </Route>
        <Route  path="/dashboard">
        <Dashboard></Dashboard>
        </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
