import React from 'react'

export const Topbar = () => {
  return (
    <div className="topbar">
            <div className="container position-relative z-index-1">
                <div className="row align-items-center">
                    <div className="topbar-item topbar-item-left">
                        <ul className="social-list">
                            <li>
                                <a href="https://www.facebook.com/maclareentoursntravels/" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/maclareentoursntravels/" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram"></i></a>
                            </li>
                            {/* <li>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a>
                            </li> */}
                            {/* <li>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="flaticon-linkedin"></i></a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="topbar-item justify-content-end">
                        <ul className="topbar-action">
                            <li>
                                <i className="flaticon-mail"></i>
                                <a href="mailto:traveldesk@maclareen.com"><span className="__cf_email__">traveldesk@maclareen.com</span></a>
                            </li>
                            <li>
                                <i className="flaticon-telephone"></i>
                                <a href="tel:02266667011">022 6666 7011</a>
                            </li>
                            {/* <li>
                                <i className="flaticon-address"></i>
                                110, Lodha Supremus, 2, Rd Number 22, Wagle Industrial Estate, Thane West, Maharashtra 400604.
                            </li> */}
                        </ul>
                        <div className="dropdown language-option"> 
                        {/* <!-- "language-option" className is used for language switcher --> */}
                            <button className="dropdown-toggle" type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="flaticon-worldwide"></i>
                                <span className="lang-name"></span>  
                                {/* <!-- "lang-name" className is used for language switcher --> */}
                            </button>
                            <div className="dropdown-menu language-dropdown-menu" aria-labelledby="language1">  
                            {/* <!-- "language-dropdown-menu" className is used for language switcher --> */}
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/uk.png" alt="flag"/>
                                    English
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/china.png" alt="flag"/>
                                    简体中文
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/uae.png" alt="flag"/>
                                    العربيّة
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
