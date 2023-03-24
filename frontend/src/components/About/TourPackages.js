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
                                <small style={{color:"#eb2427"}}>We Are Specialized In</small>
                                <h2 style={{whiteSpace: "nowrap"}}>Tour & Travel Arrangement</h2>
                            </div>
                            <div className="about-content-item">
                                <div className="about-content-thumb">
                                    <i className="flaticon-map"></i>
                                </div>
                                <div className="about-content-texts">
                                    <h3>We Can Be A Great Travel Planner For You</h3>
                                    <p className="text-justify">We believe that every traveler is unique, and that's why we specialize in personalized travel planning. Let us know your interests, preferences, and budget, and we'll create a customized itinerary just for you.</p><br/>
                                    <p className="text-justify">Our travel planners are experts at creating unique and personalized travel experiences that cater to your specific needs. Whether you're looking for adventure, relaxation, culture, or food, we'll make sure your trip is one-of-a-kind.</p>
                                </div>
                            </div>
                            <div className="about-content-item">
                                <div className="about-content-thumb">
                                    <i className="flaticon-compass"></i>
                                </div>
                                <div className="about-content-texts">
                                    <h3>We Guide You All Over The World</h3>
                                    <p className="text-justify">Our travel guides have extensive knowledge of different destinations around the world. Whether you're visiting a major city or a remote village, we'll provide you with insider tips and recommendations that will make your trip unforgettable.</p>
                                </div>
                            </div>
                            {/* <div className="text-center text-lg-start">
                                <a href="about-us.html" className="btn main-btn main-btn-arrow" style={{backgroundColor:"#801c1f"}}>Discover More <i className="flaticon-right-arrow"></i></a>
                            </div> */}
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