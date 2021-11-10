import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area mt-5">
		<div className="container-fluid p-5">
			<div className="row">
				<div className="col-md-5 mb-4">
					<h3 className="footer-title"></h3>
					<div className="footer-logo mb-4  text-start">
						<img className="img-fluid" src="https://cdn11.bigcommerce.com/s-6d1tnboxyx/images/stencil/original/logo4_1550778558__25495.original.png" alt="" />
					</div>
					<div className="footer-meta  text-start">
						<p>We are offering you the best trip. Feel free to contact us to book your trip with your lovely family.</p>
					</div>
				</div>
				
				<div className="col-md-4 mb-4  text-start">
					<h3 className="footer-title">Pages</h3>
					<div className="footer-link">

				   <Nav.Link as={Link} className="text-dark fw-bold" to="/home">Home</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/destination">Explore</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/manageservice">Manage All Orders</Nav.Link>
					</div>
				</div>
				<div className="col-md-3 mb-4">
					<h3 className="footer-title text-start">Contact Us</h3>
					<div className="contact-info text-start">
						<p>Phone : +88 018 1932015</p>
						<p>Email : woodpeckers.crafts@gmail.com</p>
						<p>Address : Chattogram,Bangladesh</p>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom bg-dark">
			<div className="container p-2">
				<div className="row justify-content-center">
					
					<p className="text-white">© All Rights Reserved by Woodpeckers Crafts || 2021</p>
				</div>
			</div>
		</div>
	</footer>
  );
};

export default Footer;