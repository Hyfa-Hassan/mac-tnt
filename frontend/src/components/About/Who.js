import React from 'react'

export const Who = () => {
  return (
    <section className="about-section position-relative pb-70">
            <div className="map-shapes">
                <div className="map-shape map-shape-1 map-shape-top">
                    <img src="assets/images/shapes/map-1.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="section-title">
                    <small style={{color:"#eb2427"}}>Who We Are</small>
                    <h2>Know More About Ourselves</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 pb-30">
                        <div className="about-content-details desk-pad-right-40">
                            <h3>You Dream It, We Make It...</h3>
                            <p>We offers you numerous opportunities for exploring different landscapes, scenic beauty, culture, language,
                               and with so many amazing places in option, it can be a little hard to decide where to go.</p>
                            <ul>
                                <li>We provide every travel realted solution.</li>
                                <li>We provide absolutely honest and ethical interactions.</li>
                                <li>We organize group tours, customized packages & corporate tours (MICE).</li>
                                <li>We provide visa assistance & also take care of air tickets, travel insurance.</li>
                            </ul>
                            <p>Our satisfied customers highlights our passion for the tourism sector. “We love what we do & thats why we do it best. To certify this passion we are authorized by not only the Indian Railways but also recognized by IATA.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-30">
                        <div className="about-content-image border-radius-10">
                            <img src="assets/images/about-us-image.jpg" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
