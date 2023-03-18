import React from "react";
import { useEffect, useState } from "react";
import {BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import axios from "axios"
import { useContext } from "react";
import {AppContext} from "../TourPacakge/Context"
import { Link } from "react-router-dom";



 export const PackagesList = () =>{


    const {loading, packdata} = useContext(AppContext);
   // console.log(packdata);


    return(
        <section class="tour-section pb-100 position-relative">
            <div class="map-shapes">
                <div class="map-shape map-shape-1 map-shape-top">
                    <img src="assets/images/shapes/map-1.png" alt="shape"/>
                </div>
                <div class="map-shape map-shape-2 map-shape-bottom">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div class="container">
                <div class="section-title section-title-lg">
                    <small>Popular Packages</small>
                    <h2>Amazing Tours Liked By The Adventurous</h2>
                </div>
                
                
                <div class="row">
                    
               {/* <p>{packdata.title}</p> */}
               {(loading) ? (<h1>test</h1>) :
                        
                            (packdata.map((data) => (
                                
                    <div class="col-md-6 col-lg-4 pb-30">
                        <div class="card-2">
                            <div class="card-2-image">
                            <img src={data.image} alt="holiday"/>
                            </div>
                            <div class="card-2-content">
                                <ul class="card-2-entry">
                                    <li>
                                        <i class="flaticon-calendar"></i>
                                        {data.no_of_people}
                                    </li>
                                </ul>
                                <div class="card-2-info">
                                    <h3>
                                        <a href="single-tour.html">{data.title}</a>
                                    </h3>
                                    <div class="card-2-info-price">{data.days}</div>
                                </div>
                                <p className="text-justify">{data.short_description}</p>
                                <div class="card-2-footer">
                                    <div class="card-2-reviews">
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
                                    <div class="card-2-action">
                                       
                                        {/* <a href="single-tour.html">Explore Tour <i class="flaticon-export"></i></a> */}
                                    <Link to="/details" state={data}>Explore Tour<i class="flaticon-export"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            )))}
                </div>
                         
            </div>
        </section>
    )
}