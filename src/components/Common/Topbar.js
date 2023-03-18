import React from 'react'

export const Topbar = () => {
  return (
    <div className="topbar">
            <div className="container position-relative z-index-1">
                <div className="row align-items-center">
                    <div className="topbar-item topbar-item-left">
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
                    <div className="topbar-item justify-content-end">
                        <ul className="topbar-action">
                            <li>
                                <i className="flaticon-mail"></i>
                                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#d7bfb2bbbbb897a3a5b6bea7f9b4b8ba"><span className="__cf_email__" data-cfemail="7119141d1d1e3105031018015f121e1c">[email&#160;protected]</span></a>
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
