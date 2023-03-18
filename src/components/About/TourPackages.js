import react from 'react'

export const TourPackages = () =>{
 return(

    <section className="tour-section bg-offwhite pt-100 pb-70 animate-section position-relative overflow-hidden" id="animateSection">
            <div className="radial-animation-shape radial-animation-shape-active">
                <img src="assets/images/shapes/compass.png" alt="compass"/>
            </div>
            <div className="container-fluid custom-container-fluid position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 pb-30">
                        <div className="max-685 ms-auto me-auto me-lg-0">
                            <div className="section-title section-title-left about-title">
                                <small>We Are Specialized In</small>
                                <h2>Tour & Travel Arrangement</h2>
                            </div>
                            <div className="about-content-item">
                                <div className="about-content-thumb">
                                    <i className="flaticon-map"></i>
                                </div>
                                <div className="about-content-texts">
                                    <h3>We Can Be A Great Travel Planner For You</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div className="about-content-item">
                                <div className="about-content-thumb">
                                    <i className="flaticon-compass"></i>
                                </div>
                                <div className="about-content-texts">
                                    <h3>We Guide You All Over The World</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div className="text-center text-lg-start">
                                <a href="about-us.html" className="btn main-btn main-btn-arrow">Discover More <i className="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-30">
                        <div className="about-content-image text-center">
                            <img src="assets/images/tour-about.png" alt="about"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 )

}