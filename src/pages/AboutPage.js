import React from 'react'
import Header from '../components/About/Header'
import HolidayDestination from '../components/About/HolidayDestination'
import { Who } from '../components/About/Who'
import { TourPackages } from '../components/About/TourPackages';
import { Partners } from '../components/About/Partners';

const AboutPage = () => {
  return (
    <div>
         
        {/* <!-- Header --> */} 
        <Header/>
        {/* <!-- Header -->
        <!-- About --> */}
        <Who/>
        {/* <!-- About -->
        <!-- Holiday Planning --> */}
        <HolidayDestination/>
        {/* <!-- Holiday Planning -->
        <!-- Tour --> */}
        <TourPackages/>
        {/* <!-- Tour -->
        
        <!-- Team --> */}
        <section class="team-section pb-70">
            <div class="container">
                <div class="section-title">
                    <small>Persons Who Guide You</small>
                    <h2>Meet Our Awesome Travel Guide</h2>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                        <div class="single-card">
                            <div class="single-card-image">
                                <img src="assets/images/team/team-1.jpg" alt="team"/>
                               
                                <ul class="single-card-social social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="single-card-content">
                                <h3>Simon D'Costa</h3>
                                <p>Mountaineering Guide</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                        <div class="single-card">
                            <div class="single-card-image">
                                <img src="assets/images/team/team-2.jpg" alt="team"/>
                                <ul class="single-card-social social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="single-card-content">
                                <h3>Jane Ronan</h3>
                                <p>Mountaineering Guide</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                        <div class="single-card">
                            <div class="single-card-image">
                                <img src="assets/images/team/team-3.jpg" alt="team"/>
                                <ul class="single-card-social social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="single-card-content">
                                <h3>Henry Carter</h3>
                                <p>Mountaineering Guide</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                        <div class="single-card">
                            <div class="single-card-image">
                                <img src="assets/images/team/team-4.jpg" alt="team"/>
                               
                                <ul class="single-card-social social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="single-card-content">
                                <h3>Jennifer Andy</h3>
                                <p>Mountaineering Guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team -->
        
        <!-- Partner --> */}
        <Partners/>
        {/* <!-- Partner -->
        

{/* 
        <!-- essential js -->
        <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="assets/js/jquery-3.6.0.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <!-- jquery ui js -->
        <script src="assets/js/jquery-ui.js"></script>
        <!-- selectize js -->
        <script src="assets/js/selectize.min.js"></script>
        <!-- magnific popup js -->
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <!-- owl carousel js -->
        <script src="assets/js/owl.carousel.min.js"></script>
        <!-- form ajazchimp js -->
        <script src="assets/js/jquery.ajaxchimp.min.js"></script>
        <!-- form validator js  -->
        <script src="assets/js/form-validator.min.js"></script>
        <!-- contact form js -->
        <script src="assets/js/contact-form-script.js"></script>
        <!-- meanmenu js -->
        <script src="assets/js/jquery.meanmenu.min.js"></script>
        <!-- main js -->
        <script src="assets/js/script.js"></script> */}
    </div>
  )
}

export default AboutPage