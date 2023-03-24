import react from 'react';

export const AuthForm = () =>{
    return(
        <div className="authentication-section pb-100 position-relative">
            <div className="map-shapes d-none d-md-block">
                <div className="map-shape map-shape-2 map-shape-vertical-top">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="authentication-header mb-30">
                    <ul>
                        <li className="active" data-authentication-list="1">Register</li>
                        <li data-authentication-list="2">Login</li>
                    </ul>
                </div>
                <div className="authentication-form-box">
                    <div className="authentication-form-box-item active" data-authentication-item="1">
                        <div className="authentication-box">
                            <div className="authentication-box-inner">
                                <form className="authentication-form mb-20">
                                    <div className="input-group input-group-bg mb-20">
                                        <input type="text" className="form-control" placeholder="Name" aria-label="Name"/>
                                    </div>
                                    <div className="input-group input-group-bg mb-20">
                                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Email"/>
                                    </div>
                                    <div className="input-group input-group-bg mb-20">
                                        <input type="password" className="form-control" placeholder="Enter Password" aria-label="Username"/>
                                    </div>
                                    <div className="authentication-account-access mb-20">
                                        <div className="authentication-account-access-item">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="check1"/>
                                                <label for="check1">Accept <a href="terms-conditions.html">terms & conditions</a> & <a href="privacy-policy.html">privacy policy</a>.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn main-btn main-btn-lg full-width">Register Now</button>
                                </form>
                                <div className="authentication-divider">
                                    <span>OR</span>
                                </div>
                                <ul className="social-list social-list-btn">
                                    <li className="social-btn-fb">
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="social-btn-gm">
                                        <a href="https://mail.google.com/" target="_blank">
                                            <i className="flaticon-google-plus-logo"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="authentication-form-box-item" data-authentication-item="2">
                        <div className="authentication-box">
                            <div className="authentication-box-inner">
                                <form className="authentication-form mb-20">
                                    <div className="input-group input-group-bg mb-20">
                                        <input type="text" className="form-control" placeholder="Username / Email Address" aria-label="Username"/>
                                    </div>
                                    <div className="input-group input-group-bg mb-20">
                                        <input type="password" className="form-control" placeholder="Enter Password" aria-label="Username"/>
                                    </div>
                                    <div className="authentication-account-access mb-20">
                                        <div className="authentication-account-access-item">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="check2"/>
                                                <label for="check2">Remember Me!</label>
                                            </div>
                                        </div>
                                        <div className="authentication-account-access-item">
                                            <div className="authentication-link">
                                                <a href="forget-password.html">Forget password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn main-btn main-btn-secondary full-width">Login Now</button>
                                </form>
                                <div className="authentication-divider">
                                    <span>OR</span>
                                </div>
                                <ul className="social-list social-list-btn">
                                    <li className="social-btn-fb">
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="social-btn-gm">
                                        <a href="https://mail.google.com/" target="_blank">
                                            <i className="flaticon-google-plus-logo"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}