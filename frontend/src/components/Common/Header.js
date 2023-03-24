import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="fixed-top">
            <div className="navbar-area">
                <div className="container">
                    <div className="mobile-nav">
                        <a href="/" className="mobile-brand">
                            <img src="assets/images/newWhite.png" alt="logo" className="logo default-logo"/>
                            <img src="assets/images/newdefaultlogo.png" alt="logo" className="sticky-logo"/>
                        </a>
                        {/* <div className="navbar-option">
                            <div className="navbar-option-item">
                                <ul className="navbar-option-list">
                                    <li className="d-md-none">
                                        <a href="#" className="mobile-option-dot">
                                            <i className="flaticon-ellipsis"></i>
                                        </a>
                                        <div className="mobile-option-dropdown">
                                            <ul className="navbar-option-list">
                                                <li>
                                                    <a href="#" className="page-search-btn">
                                                        <i className="flaticon-searching"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="authentication.html">
                                                        <i className="flaticon-user-1"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="top-sidebar-action">
                                                        <i className="flaticon-grid"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    {/* <li className="d-none d-md-inline-block">
                                        <a href="#" className="page-search-btn">
                                            <i className="flaticon-searching"></i>
                                        </a>
                                    </li> */}
                                    {/* <li>
                                        <a href="cart.html">
                                            <i className="flaticon-shopping-bag"></i>
                                            <span className="option-badge">2</span>
                                        </a>
                                    </li> */}
                                    {/* <li className="d-none d-md-inline-block">
                                        <a href="authentication.html">
                                            <i className="flaticon-user-1"></i>
                                        </a>
                                    </li> */}
                                    {/* <li className="d-none d-md-inline-block d-lg-none">
                                        <a href="#" className="top-sidebar-action">
                                            <i className="flaticon-grid"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    </div>
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="/">
                                <img src="assets/images/newWhite.png" alt="logo" className="logo default-logo"/>
                                <img src="assets/images/newdefaultlogo.png" alt="logo" className="sticky-logo"/>
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item" style={{backgroundColor:"#eb2427"}}>
                                        <a href="/" className="nav-link active" >Home</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                                <a href="about" className="nav-link">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Our Services</a>
                                        <ul className="dropdown-menu">
                                        <li className="nav-item">
                                                <a href="hotels" className="nav-link dropdown-toggle">Hotels</a>
                                        </li>
                                        <li className="nav-item">
                                                <a href="flight" className="nav-link dropdown-toggle">Flights</a>
                                        </li>
                                        <li className="nav-item">
                                                <a href="tours" className="nav-link dropdown-toggle">Tours</a>
                                        </li>
                                        <li className="nav-item">
                                                <a href="destination" className="nav-link dropdown-toggle">Destinations</a>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                                <a href="faqs" className="nav-link">FAQ's</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="contact" className="nav-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-option">
                                <div className="navbar-option-item">
                                    <ul className="navbar-option-list">
                                        {/* <li>
                                            <a href="#" className="page-search-btn">
                                                <i className="flaticon-searching"></i>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="cart.html">
                                                <i className="flaticon-shopping-bag"></i>
                                                <span className="option-badge">2</span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <div className="navbar-option-item">
                                    <a href="authentication" className="btn main-btn main-btn-arrow">Registration <i className="flaticon-right-arrow"></i></a>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  )
}

