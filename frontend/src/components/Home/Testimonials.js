import react from 'react'

export const Testimonials = () =>{
    return(
        <section className="testimonial-section image-bg image-bg-1 p-tb-100">
            <div className="container-fluid position-relative z-index-1">
                <div className="section-title section-title-white">
                    <small>Testimonials Of The Traveller</small>
                    <h2>Some Good Talk About Us</h2>
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                    <div className="item">
                        <div className="testimonial-card text-center">
                            <div className="testimoial-quote">
                                <i className="flaticon-left-quote" style={{color:"#eb2427"}}></i>
                            </div>
                            <p className="testimonial-feedback">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <div className="testimonial-client-info">
                                <img src="assets/images/clients/client-1.jpg" alt="client"/>
                                <ul className="review-star">
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                </ul>
                                <h3 className="testimonial-name">Amrita Roy</h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-card text-center">
                            <div className="testimoial-quote">
                                <i className="flaticon-left-quote" style={{color:"#eb2427"}}></i>
                            </div>
                            <p className="testimonial-feedback">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <div className="testimonial-client-info">
                                <img src="assets/images/clients/client-2.jpg" alt="client"/>
                                <ul className="review-star">
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                </ul>
                                <h3 className="testimonial-name">John Abril</h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-card text-center">
                            <div className="testimoial-quote">
                                <i className="flaticon-left-quote" style={{color:"#eb2427"}}></i>
                            </div>
                            <p className="testimonial-feedback">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <div className="testimonial-client-info">
                                <img src="assets/images/clients/client-3.jpg" alt="client"/>
                                <ul className="review-star">
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                </ul>
                                <h3 className="testimonial-name">Jane Anderson</h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-card text-center">
                            <div className="testimoial-quote">
                                <i className="flaticon-left-quote" style={{color:"#eb2427"}}></i>
                            </div>
                            <p className="testimonial-feedback">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <div className="testimonial-client-info">
                                <img src="assets/images/clients/client-4.jpg" alt="client"/>
                                <ul className="review-star">
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                    <li className="full-star"><i className="flaticon-star"></i></li>
                                </ul>
                                <h3 className="testimonial-name">Devit Kotlin</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}