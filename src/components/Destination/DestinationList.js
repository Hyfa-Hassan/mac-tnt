import React from "react";
import { useContext } from "react";
import { AppContext } from "../TourPacakge/Context"
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Link } from "react-router-dom";

export const DestinationList = () => {
    const { destloading, destdata } = useContext(AppContext);
    return (
        <section className="destination-section pb-100">
            <div className="container">
                <div className="section-title">
                    <small>Ultimate Destinationss</small>
                    <h2>Choose Your Destination</h2>
                </div>
                <div className="row">
                    {(destloading) ? (<h1>Loading</h1>) :

                        (destdata.map((data) => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
                                <div className="destination-card-full">
                                    <div className="destination-card-image">
                                        <img src={data.image} alt="destination" />
                                        <h3 className="destination-card-name">{data.country}</h3>
                                    </div>
                                    <div className="card-1-content">
                                        <div className="card-1-info">
                                            <h3>
                                                <Link to="/single-destination" state={data}>{data.country}</Link>
                                            </h3>
                                            <div className="card-1-reviews">
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
                                                <span>({data.no_of_reviews} Reviews)</span>
                                            </div>
                                        </div>
                                        <p className="text-justify">{data.short_desc}</p>
                                    </div>
                                    <div className="destination-card-link">
                                        <Link to="/single-destination" state={data}><i className="flaticon-export"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )))}

                </div>

            </div>
        </section>
    )
}