import React from 'react'
import {BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { useContext } from "react";
import {AppContext} from "../TourPacakge/Context"
import { Link } from 'react-router-dom';

const HolidayDestination = () => {
    const {loading, packdata} = useContext(AppContext);
  return (
    <section className="holiday-planning-section pb-70 position-relative">
            <div className="map-shapes">
                <div className="map-shape map-shape-2">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="section-title">
                    <small>The Top Places For</small>
                    <h2>Planning Your Holiday</h2>
                </div>
                <div className="row">
                {(loading) ? (<h1>loading..</h1>) :
                        
                            (packdata.slice(0, 4).map((data) => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
                        <div className="card-1">
                            <div className="card-1-image">
                                <div className="card-1-overlay">
                                    <a href="single-destination.html">
                                    <img src={data.image} alt="holiday"/>
                                    </a>
                                    <ul className="card-1-entry">
                                        <li>
                                            <i className="flaticon-calendar"></i>
                                            {data.date}
                                        </li>
                                        <li>
                                            <i className="flaticon-user-1"></i>
                                            {data.no_of_people}
                                        </li>
                                        <li>
                                            <i className="flaticon-placeholder-point"></i>
                                            {data.title}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-1-redirect">
                                    <Link to="/singletour"><i className="flaticon-export"></i></Link>
                                    {/* <a href="single-destination.html">
                                        <i className="flaticon-export"></i>
                                    </a> */}
                                </div>
                            </div>
                            <div className="card-1-content">
                                <div className="card-1-info">
                                    <h3>
                                    <Link to="/singletour" state={data}>{data.title}</Link>
                                    </h3>
                                    <div className="card-1-reviews">
                                    <ul style={{listStyle:"none"}} className="review-star">
                                    {(() => {
                                        const rows = [];
                                        const fullstar = Math.floor(data.star_rating);
                                        const halfstar = (!Number.isInteger(parseFloat(data.star_rating))) ? <li key={data._id}><BsStarHalf color="#ffa371"/></li> : 0;
                                    
                                    //console.log(fullstar);
                                        for (let i = 0; i <fullstar; i++) {
                                        rows.push(<li key={i}><BsStarFill color="#ffa371"/></li>);
                                        }
                                        if(halfstar!=0) {
                                            rows.push(halfstar);
                                        }
                                        return rows;
                                        
                                    })()}
                                </ul>
                                        <span>({data.no_of_reviews} Reviews)</span>
                                    </div>
                                </div>
                                <p className="text-justify">{data.short_description}</p>
                            </div>
                        </div>
                    </div>
                    )))}
                </div>
                        
            </div>
        </section>
  )
}

export default HolidayDestination