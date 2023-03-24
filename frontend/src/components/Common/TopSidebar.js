import react from 'react'

export const TopSidebar = () =>{
    return(
        <div className="top-sidebar-wrapper">
            <div className="top-sidebar-modal">
                <div className="top-sidebar-body">
                    <div className="topbar-sidebar-header">
                        <div className="topbar-sidebar-brand">
                            <a href="index.html">
                                <img src="assets/images/logo-default-color.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="topbar-sidebar-close">
                            <i className="flaticon-close"></i>
                        </div>
                    </div>
                    <div className="topbar-sidebar-item">
                        <h3>Contact Us</h3>
                        <ul className="topbar-sidebar-lists">
                            <li>
                                <i className="flaticon-mail"></i>
                                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#88e0ede4e4e7c8fcfae9e1f8a6ebe7e5"><span className="__cf_email__" data-cfemail="dcb4b9b0b0b39ca8aebdb5acf2bfb3b1">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i className="flaticon-telephone"></i>
                                <a href="tel:+44-5346-338">+44 5346 338</a>
                            </li>
                            <li>
                                <i className="flaticon-address"></i>
                                3 Edgar Buildings, England, BA1 2FJ.
                            </li>
                        </ul>
                    </div>
                    <div className="topbar-sidebar-item">
                        <h3>Follow Us</h3>
                        <ul className="social-list">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}