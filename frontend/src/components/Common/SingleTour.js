import react from 'react'
import { useLocation } from 'react-router-dom'


export const SingleTour = () =>{
    const location = useLocation()
    const data = location.state
    console.log(location.state);
 
return(
    <>
    <div className='tournav' style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}></div>
    <section className="tour-section pt-100 pb-100 position-relative" >
            <div className="map-shapes ">
                <div className="map-shape map-shape-1 map-shape-top">
                    <img src="assets/images/shapes/map-1.png" alt="shape"/>
                </div>
                <div className="map-shape map-shape-2 map-shape-bottom">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="details-card">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div >
                                <div className="item">
                                    {/* <img src="assets/images/tours/tour-1.jpg" alt="tour"/> */}
                                    <img src={data.image} loading="lazy" alt="tour"/>
                                </div>
                                {/* <div className="item">
                                    <img src="assets/images/tours/tour-2.jpg" alt="tour"/>
                                </div>
                                <div className="item">
                                    <img src="assets/images/tours/tour-3.jpg" alt="tour"/>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 desk-pad-left-40">
                            <div className="details-card-content">
                                <div className="card-2-info">
                                    <h3>{data.title}</h3>
                                    <div className="card-2-info-price">{data.days}</div>
                                </div>
                                <div className="card-2-reviews">
                                    <ul className="review-star">
                                        <li className="full-star"><i className="flaticon-star"></i></li>
                                        <li className="full-star"><i className="flaticon-star"></i></li>
                                        <li className="full-star"><i className="flaticon-star"></i></li>
                                        <li className="full-star"><i className="flaticon-star"></i></li>
                                        <li className="full-star"><i className="flaticon-star"></i></li>
                                    </ul>
                                    <span>({data.no_of_reviews} Reviews)</span>
                                </div>
                                <p className="text-justify">{data.short_description}</p>
                                <div className="details-card-info">
                                    <h4 style={{color:"#eb2427"}}>Tour Details</h4>
                                    <div className="details-card-info-list">
                                        {/* <div className="details-card-list-item">
                                            <div className="details-card-list-label">Covered Places</div>
                                            <div className="details-card-list-texts">{data.places}</div>
                                        </div> */}
                                        <div className="details-card-list-item">
                                            <div className="details-card-list-label">Duration</div>
                                            <div className="details-card-list-texts">{data.days}</div>
                                        </div>
                                        <div className="details-card-list-item">
                                            <div className="details-card-list-label">Starting</div>
                                            <div className="details-card-list-texts">{data.date}</div>
                                        </div>
                                        {/* <div className="details-card-list-item">
                                            <div className="details-card-list-label">Ending</div>
                                            <div className="details-card-list-texts">07 March 2021</div>
                                        </div> */}
                                        <div className="details-card-list-item">
                                            <div className="details-card-list-label">Person</div>
                                            <div className="details-card-list-texts">{data.no_of_people}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                          
                                <a href="/enquire-form" className="btn main-btn main-btn-arrow" style={{backgroundColor:"#eb2427"}}>Book This Tour <i className="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
)

}