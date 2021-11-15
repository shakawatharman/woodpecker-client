import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import "./Dashboard.css";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import Payment from "../Payment/Payment";
import AddProduct from "../AddProduct/AddProduct";
import MyOrders from "../MyOrders/MyOrders";
import ManageOrders from "../ManageOrders/ManageOrders";
import AllUsers from "../../../Components/AllUsers/AllUsers";
import ManageProducts from "../../../Components/ManageProducts/ManageProducts";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, admin, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // console.log(user);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List className="px-1">
        <Link to="/home">
          <button className="btn sidebar__btn w-100">Home</button>
        </Link>

        <Link exact to={`${url}`}>
          <button className="btn sidebar__btn w-100">DashBoard</button>
        </Link>

        {!admin && (
          <>
            <Link to={`${url}/addreview`}>
              <button className="btn sidebar__btn w-100">Add a Review</button>
            </Link>

            <Link to={`${url}/payment`}>
              <button className="btn sidebar__btn w-100">Payment</button>
            </Link>
          </>
        )}

        {admin && (
          <>
            <Link to={`${url}/allproducts`}>
              <button className="btn sidebar__btn w-100">All Products</button>
            </Link>
            <Link to={`${url}/addproduct`}>
              <button className="btn sidebar__btn w-100">Add Product</button>
            </Link>
            <Link to={`${url}/manageProducts`}>
              <button className="btn sidebar__btn w-100">Manage Orders</button>
            </Link>
            <Link to={`${url}/allusers`}>
              <button className="btn sidebar__btn w-100">Make Admin</button>
            </Link>
          </>
        )}
        <Link onClick={logOut} to={`${url}`}>
          <button className="btn sidebar__btn w-100">Logout</button>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <button className="btn btn-outline-dark text-white ms-auto">
          <Typography variant="h6" noWrap component="div">
          User: {user.displayName}
          </Typography>
          </button>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <h1>Welcome to Dashboard</h1>
            {admin && <ManageOrders></ManageOrders>}

            {!admin && <MyOrders></MyOrders>}
          </Route>

          <Route path={`${path}/allproducts`}>
            <ManageProducts />
          </Route>
          <Route path={`${path}/addreview`}>
            <AddReview />
          </Route>
          <Route path={`${path}/allusers`}>
            <AllUsers />
          </Route>

          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          {/* <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute> */}
          <Route path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageOrders></ManageOrders>
          </Route>
          {/* <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute> */}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
