import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import SpecialButton from '../SpecialButton/SpecialButton';


const Login = () => {

  const { user,  loginUser, isLoading, authError } = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();

  const history = useHistory();


    
  const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData)
      console.log(loginData);
  }
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();

   
 }

    return (
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img className='w-100' src="https://media.istockphoto.com/vectors/carpenter-with-circular-saw-working-in-workshop-worker-carpentry-vector-id1273822347?b=1&k=20&m=1273822347&s=170667a&w=0&h=oDnX24egsYaqZYglLNiLemRvD6GZcDxAR4kUbaA7D1A=" alt="" />
            </div>
    
            <div className="col-md-6 col-sm-12 shadow p-3">
              <Form onSubmit={handleLoginSubmit} className="my-5">
              
                <div>
                    <img className="w-25 mb-5" src="https://woodpeckerbd.com/wp-content/uploads/2021/09/Woodpecker-logo-wc-1.png" alt="" />
                </div>
                <div className="text-center mb-3">
                 
                </div>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
     
                  <Form.Control
                    name="email"
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Enter Your email"
                    required
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
            
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </Form.Group>
               
    
                <div className="text-center mt-3">
                  {/* <p className="text-danger">{error}</p> */}
                  <SpecialButton type="submit">Login</SpecialButton>
                 
                </div>

                <div className="mt-3 text-center">
                <Link to="/register">New User? Please Register</Link>
              </div>
                {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successful</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
              </Form>
            
            </div>
          </div>
        </div>
      );
    };
    

export default Login;