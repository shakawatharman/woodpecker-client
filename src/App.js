import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import AllProducts from "./Pages/AllProducts/AllProducts";
import PurchaseForm from "./Pages/PurchaseForm/PurchaseForm";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import Payment from "./Pages/Dashboard/Payment/Payment";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";

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
        <AllProducts></AllProducts>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <Route path="/products">
        <Products></Products>
        </Route>
        <Route path="/allproducts">
        <AllProducts></AllProducts>
        </Route>
        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/payment">
        <Payment></Payment>
        </PrivateRoute>
        <PrivateRoute path="/buyingProduct/:productID">
        <SingleProduct></SingleProduct>
        </PrivateRoute>
        <PrivateRoute path="/purchaseform">
        <PurchaseForm></PurchaseForm>
        </PrivateRoute>
        <PrivateRoute path="/addproduct">
        <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/addreview">
        <AddReview></AddReview>
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
