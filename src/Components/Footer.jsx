import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="containers">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Contact Us</h4>
                        <p><i className="fas fa-envelope"></i> Email: contact@example.com</p>
                        <p><i className="fas fa-phone"></i> Phone: +123 456 7890</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-home"></i><Link to="/"> Home</Link></li>
                            <li><i className="fas fa-info-circle"></i><Link to="/about"> About Us</Link></li>
                            <li><i className="fas fa-cogs"></i><Link to="/services"> Services</Link></li>
                            <li><i className="fas fa-envelope"></i><Link to="/contact"> Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook"></i> Facebook</Link></li>
                            <li><Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i> Twitter</Link></li>
                            <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i> Instagram</Link></li>
                        </ul>
                    </div>
                </div>
                <hr /> {/* Optional horizontal line to separate content */}
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center">© {new Date().getFullYear()} UN HABITAT. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
