import React, { useEffect, useState } from "react";
import axios from "axios"
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../TourPacakge/Context"



export const TourBox = () => {

    const { loading, packdata } = useContext(AppContext);


    return (
        (loading) ? (<h1>Loading...</h1>) :

            (packdata.map((data) => (
                <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
                    <div className="card-1">
                        <div className="card-1-image">
                            <div className="card-1-overlay">
                                <a href="single-destination.html">
                                    {/* <img src="assets/images/holiday/holiday-place-2.jpg" alt="holiday"/> */}
                                    <img src={data.image} alt="holiday" />
                                    {/* {data.image} */}
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
                                <a href="single-destination.html">
                                    <i className="flaticon-export"></i>
                                </a>
                            </div>
                        </div>
                        <div className="card-1-content">
                            <div className="card-1-info">
                                <h3>
                                    <Link to="/details" state={data}>{data.title}</Link>
                                </h3>
                                <div className="card-1-reviews">
                                    <span>({data.no_of_reviews} Reviews)</span>
                                    {/* <ul className="review-star">
                            <li className="full-star"><i className="flaticon-star"></i></li>
                            <li className="full-star"><i className="flaticon-star"></i></li>
                            <li className="full-star"><i className="flaticon-star"></i></li>
                            <li className="full-star"><i className="flaticon-star"></i></li>
                            <li className="full-star"><i className="flaticon-star"></i></li>
                        </ul> */}
                                    <ul style={{ listStyle: "none" }} className="review-star">
                                        {(() => {
                                            const rows = [];
                                            const fullstar = Math.floor(data.star_rating);
                                            const halfstar = (!Number.isInteger(parseFloat(data.star_rating))) ? <li key={data._id}><BsStarHalf color="#ffa371" /></li> : 0;

                                            //console.log(fullstar);
                                            for (let i = 0; i < fullstar; i++) {
                                                rows.push(<li key={i}><BsStarFill color="#ffa371" /></li>);
                                            }
                                            if (halfstar !== 0) {
                                                rows.push(halfstar);
                                            }
                                            return rows;

                                        })()}
                                    </ul>

                                </div>
                            </div>
                            <p className="text-justify">{data.short_description}</p>
                        </div>
                    </div>
                </div>
            )))



    )
}


