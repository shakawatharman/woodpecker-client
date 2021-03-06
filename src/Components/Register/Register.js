import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import SpecialButton from '../SpecialButton/SpecialButton';


const Register = () => {

  const {user, registerUser, isLoading, authError} = useAuth()

  const history = useHistory();

  const [loginData, setLoginData] = useState({});

    
  const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData)
      console.log(loginData);
  }

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
        alert('Your password did not match');
        return
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();

    const websiteUser = {
      name : loginData.name,
      email : loginData.email,
      admin: false
    }
    console.log(websiteUser);

    fetch("https://secure-shore-57866.herokuapp.com/users",{
      method:"POST",
      headers: {
          "content-type":"application/json"
      },
      body:JSON.stringify(websiteUser)
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.insertedId){
          
          e.target.reset();
      }
  })

}


    return (
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img className='w-100' src="https://i.ibb.co/Y33k0LC/Carpenter-Character-with-Circular-Saw-Working-in-Workshop-Worker-Carpentry-Woodwork-Joiner-Man-Sawin.jpg" alt="" />
            </div>
    
            <div className="col-md-6 col-sm-12 shadow p-3">
          
            { !isLoading &&
              <Form onSubmit={handleLoginSubmit} className="my-5">
                
                <div>
                    <img className="w-25 mb-5" src="https://i.ibb.co/DrpMtTN/Woodpecker-logo-wc-1.png" alt="" />
                </div>
                <div className="text-center mb-3">
                 
                </div>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    name="name"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    name="email"
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    name="password2"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Retype Your Password"
                    required
                  />
                </Form.Group>
               
    
                <div className="text-center mt-3">
                  {/* <p className="text-danger">{error}</p> */}
                  <SpecialButton type="submit">Register</SpecialButton>
                  {/* <Button variant="primary" type="submit" size="lg">
                    Register
                  </Button> */}
                </div>
                <div className="mt-3 text-center">
                <Link to="/login">Already Registered? Please Login</Link>
              </div>
              </Form>
           }

              {isLoading && <CircularProgress />}
                     {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                     {authError && <Alert severity="error">{authError}</Alert>}
              
            </div>
          </div>
        </div>
      );
    };
    

export default Register;