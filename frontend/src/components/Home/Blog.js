import React from "react";

export const Blog = () =>{
return(
    <section className="blog-section pb-100 overflow-hidden" id="blogSection">
            <div className="container position-relative">
                <div className="mini-shapes d-none d-lg-block">
                    <div className="mini-shape mini-shape-2">
                        <img src="assets/images/shapes/mini-shape-2.png" alt="shape"/>
                    </div>
                </div>
                <div className="section-title">
                    <small>To Get More Tips And Tricks</small>
                    <h2>Read Our Daily Blog</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 pb-30 desk-pad-right-50">
                        <div className="blog-image-card blog-image-card-1">
                            <div className="blog-card-content">
                                <ul className="blog-entry">
                                    <li>
                                        <i className="flaticon-calendar"></i>
                                        03 Feb
                                    </li>
                                    <li>
                                        <i className="flaticon-user-1"></i>
                                        John Anderson
                                    </li>
                                </ul>
                                <h3>
                                    <a href="single-blog.html">How Not To Get Lost In Foreign Country</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <div className="blog-redirect-link">
                                    <a href="single-blog.html">Read Article <i className="flaticon-export"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-flat-1 blog-bg-1 mb-30">
                            <div className="blog-card-content">
                                <ul className="blog-entry">
                                    <li>
                                        <i className="flaticon-calendar"></i>
                                        03 Feb
                                    </li>
                                    <li>
                                        <i className="flaticon-user-1"></i>
                                        John Anderson
                                    </li>
                                </ul>
                                <h3>
                                    <a href="single-blog.html">How Not To Get Lost In Foreign Country</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <div className="blog-redirect-link">
                                    <a href="single-blog.html">Read Article <i className="flaticon-export"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-flat-1 blog-bg-2 mb-30">
                            <div className="blog-card-content">
                                <ul className="blog-entry">
                                    <li>
                                        <i className="flaticon-calendar"></i>
                                        02 Feb
                                    </li>
                                    <li>
                                        <i className="flaticon-user-1"></i>
                                        John Anderson
                                    </li>
                                </ul>
                                <h3>
                                    <a href="single-blog.html">The Best Places To Visit With Family</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <div className="blog-redirect-link">
                                    <a href="single-blog.html">Read Article <i className="flaticon-export"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-flat-1 blog-bg-3 mb-30">
                            <div className="blog-card-content">
                                <ul className="blog-entry">
                                    <li>
                                        <i className="flaticon-calendar"></i>
                                        01 Feb
                                    </li>
                                    <li>
                                        <i className="flaticon-user-1"></i>
                                        John Anderson
                                    </li>
                                </ul>
                                <h3>
                                    <a href="single-blog.html">How To Spend A Perfect Weekend In Asia Together</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <div className="blog-redirect-link">
                                    <a href="single-blog.html">Read Article <i className="flaticon-export"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="blogs-two-column.html" className="btn main-btn main-btn-arrow">Explore Blog <i className="flaticon-right-arrow"></i></a>
                </div>
            </div>
        </section>
)

}