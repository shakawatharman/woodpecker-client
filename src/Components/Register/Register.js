import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SpecialButton from '../SpecialButton/SpecialButton';


const Register = () => {

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
    // registerUser(loginData.email, loginData.password, loginData.name, history);
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
                {/* <h2 className="mb-5 text-primary text-center">Log<span className="bg-primary text-white">in</span></h2> */}
                <div>
                    <img className="w-25 mb-5" src="https://woodpeckerbd.com/wp-content/uploads/2021/09/Woodpecker-logo-wc-1.png" alt="" />
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
              </Form>
              <div className="mt-3 text-center">
                <Link to="/login">Already Registered? Please Login</Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Register;