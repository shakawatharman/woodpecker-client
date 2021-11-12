import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import Payment from "./Pages/Payment/Payment";
import NotFound from "./Pages/NotFound/NotFound";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/explore">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/payment">
        <Payment></Payment>
        </PrivateRoute>
        <PrivateRoute path="/allproducts">
        <AllProducts></AllProducts>
        </PrivateRoute>
        <PrivateRoute path="/addproduct">
        <AddProduct></AddProduct>
        </PrivateRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
     </AuthProvider>
    
    </div>
  );
}

export default App;
