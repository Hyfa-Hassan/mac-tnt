import React from "react";

export const Footer = () =>{
    return(
        <footer className="footer footer-bg">
            <div className="footer-upper pb-70 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-item">
                                <div className="footer-logo">
                                    <a href="#"><img src="assets/images/newdefaultlogo.png" alt="logo"/></a>
                                </div>
                                <ul className="footer-details footer-address">
                                    <li>
                                        <i className="flaticon-mail"></i>
                                        <a href="mailto:traveldesk@maclareen.com"><span className="__cf_email__">traveldesk@maclareen.com</span></a>
                                    </li>
                                    <li>
                                        <i className="flaticon-telephone"></i>
                                        <a href="tel:02266667011">022 6666 7011</a>
                                    </li>
                                    <li style={{textAlign:"left"}}>
                                        <i className="flaticon-address"></i>
                                        110, Lodha Supremus, 2, Rd Number 22, Wagle Industrial Estate, Thane West, Maharashtra 400604.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li>
                                        <a href="flight">Flights</a>
                                    </li>
                                    <li>
                                        <a href="hotels">Hotels</a>
                                    </li>
                                    <li>
                                        <a href="tours">Tours</a>
                                    </li>
                                    <li>
                                        <a href="faqs">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Important Links</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li>
                                        <a href="destination">Destination</a>
                                    </li>
                                    <li>
                                        <a href="contact">Get In Touch</a>
                                    </li>
                                    <li>
                                        <a href="about">Who We Are</a>
                                    </li>
                                    <li>
                                        <a href="contact">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="hotels">Hotels</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-30">
                                <div className="footer-content-title">
                                    <h3>Instafeed</h3>
                                </div>
                                <div className="footer-details">
                                    <ul className="footer-gallery">
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-1.jpg" alt="insta"/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-2.jpg" alt="insta"/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-3.jpg" alt="insta"/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-4.jpg" alt="insta"/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-5.jpg" alt="insta"/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                            <img src="assets/images/instafeed/instafeed-6.jpg" alt="insta"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col footer-lower-item">
                            <div className="footer-copyright-text">
                                <p>Copyright ©2023 Reserved By <a href="https://maclareenai.com/" target="_blank" rel="noopener noreferrer" >Maclareen AI Innovation</a></p>
                            </div>
                        </div>
                        <div className="col footer-lower-item footer-lower-right">
                            Follow:
                            <ul className="social-list">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><i className="flaticon-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><i className="flaticon-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" ><i className="flaticon-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" ><i className="flaticon-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}