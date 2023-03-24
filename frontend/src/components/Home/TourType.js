import react from 'react';
import { Link } from "react-router-dom";

export const TourType = () =>{
 return(
    <section className="tour-video-section position-relative">
            <div className="map-shapes">
                <div className="map-shape map-shape-2 map-shape-top">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div className="tour-video-contents">
                <div className="tour-video-item desk-pad-right-70 order-2 order-lg-1">
                    <div className="tour-video-bg" >
                        <div className="video-icon" >
                            <a href="https://www.youtube.com/watch?v=pqEO5r-Vlpo" className="video-popup" style={{backgroundColor:"#eb2427"}}>
                                <i className="flaticon-play" style={{backgroundColor:"#eb2427"}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="tour-video-item tour-video-item-details pt-100 order-1 order-lg-2 tab-pt-0">
                    <div className="max-685 m-auto me-lg-0 ms-lg-0">
                        <div className="section-title section-title-left about-title">
                            <small style={{color:"#eb2427"}}>Among The All</small>
                            <h2>Choose Your Favorite Tour</h2>
                        </div>
                        <div className="about-content-item">
                            <div className="about-content-thumb">
                                <i className="flaticon-gallery"></i>
                            </div>
                            <div className="about-content-texts">
                                <h3>We Suggest You The Best Tour Collection</h3>
                                <p className='text-justify'>We are one of the main Mumbai based travel service offering a wide exhibit of movement administrations to the singular vacationers, families and gatherings. We have practical experience in inbound homegrown the travel industry to all objections inside India.</p>
                            </div>
                        </div>
                        <div className="text-center text-lg-start">
                            {/* <a href="tour.html" className="btn main-btn main-btn-arrow">Book A Tour <i className="flaticon-right-arrow"></i></a> */}
                            <Link to="/tours" className="btn main-btn main-btn-arrow" style={{backgroundColor:"#eb2427"}}>Book A Tour <i className="flaticon-right-arrow"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container tour-category">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-blue">
                            <Link to="/tours">
                                <i className="flaticon-hiking"></i>
                                <h3>Adventure</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-pink">
                        <Link to="/tours">
                                <i className="flaticon-beach"></i>
                                <h3>Sea Beach</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-green">
                        <Link to="/tours">
                                <i className="flaticon-adventure"></i>
                                <h3>Mountain</h3>
                        </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-yellow">
                        <Link to="/tours">
                                <i className="flaticon-bagpack"></i>
                                <h3>Couple Tour</h3>
                        </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-purple">
                        <Link to="/tours">
                                <i className="flaticon-fire"></i>
                                <h3>Night Fall</h3>
                        </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                        <div className="tour-category-card tour-category-card-greendark">
                        <Link to="/tours">
                                <i className="flaticon-signpost"></i>
                                <h3>Popular</h3>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 )

}