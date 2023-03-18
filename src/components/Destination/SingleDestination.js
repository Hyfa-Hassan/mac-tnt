import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useContext } from "react";
import { AppContext } from "../TourPacakge/Context"
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'

export const SingleDestination = () => {

    const { destloading, destdata } = useContext(AppContext);
    const location = useLocation()
    const data = location.state
    const ContURL = data.country


    const [countrypackdata, setountrypackdata] = useState([]);
    const [countryload, setountrypackload] = useState(false);

    useEffect(() => {
        const countrypackdata = async () => {
            setountrypackload(true);
            const data = await axios.get(`http://localhost:3004/api/country/${ContURL}`)
            //console.log("countriess >>>>", data);
            setountrypackdata(data.data.country);
            setountrypackload(false);
        };
        countrypackdata();
    }, []);


    return (
        <>
        
        <div className="singDesBar" style={{height:"80px", width:"100%", backgroundColor:"rgba(0, 0, 0, .3)"}}></div>
        <section className="destination-section pt-100 pb-70 position-relative" > 
            <div className="map-shapes">
                <div className="map-shape map-shape-1 map-shape-top">
                    <img src="assets/images/shapes/map-1.png" alt="shape" />
                </div>
                <div className="map-shape map-shape-2 map-shape-bottom">
                    <img src="assets/images/shapes/map-2.png" alt="shape" />
                </div>
            </div>
            <div className="container">
                <div className="forum-main-image">
                    <img src={data.banner_image} alt="destination" />
                </div>
                <div className="row">
                    <>
                        <div className="col-lg-9 pb-30 desk-pad-right-40">
                            <div className="forum-details">
                                <h3>{data.country}</h3>
                                <p className="text-justify">{data.description}</p>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> */}
                                <div className="row">
                                    {(data.about_image.map((image) => (

                                        <div className="col-sm-6 col-sm-4 col-lg-4">
                                            <div className="forum-details-inner-image">
                                                <img src={image} alt="destination" />
                                            </div>
                                        </div>

                                    )))}
                                </div>
                                {/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            </div>

                        </div>


                    </>

                    <div className="col-lg-3 pb-30">

                        <div className="sidebar-item">
                            <h3>Popular Destination</h3>
                            <ul className="sidebar-destination-list">
                                {(destloading) ? (<h1>Loading</h1>) :

                                    (destdata.map((data) => (
                                        <li key={data.id}>
                                            <Link to="/single-destination" state={data}>
                                                <img src={data.image} />
                                                <h3>{data.country}</h3>
                                            </Link>
                                        </li>
                                    )))}
                            </ul>
                        </div>
                        {/* <div class="sidebar-item">
                            <h3>Tags</h3>
                            <ul class="sidebar-tag">
                                <li>
                                    <a href="destination.html">Europe</a>
                                </li>
                                <li>
                                    <a href="destination.html">Trendy</a>
                                </li>
                                <li>
                                    <a href="destination.html">Popular Tour</a>
                                </li>
                                <li>
                                    <a href="destination.html">Unique Places</a>
                                </li>
                                <li>
                                    <a href="destination.html">America</a>
                                </li>
                                <li>
                                    <a href="destination.html">Travel</a>
                                </li>
                                <li>
                                    <a href="destination.html">Popular City</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <h3>{data.country} Tour Packages</h3>< br/>

                <div className="row">

                    {/* <p>{packdata.title}</p> */}
                    {(countryload) ? (<h1>test</h1>) :

                        (countrypackdata.map((data) => (

                            <div className="col-md-6 col-lg-3 pb-30">
                                <div className="card-2">
                                    <div className="card-2-image">
                                        <img src={data.image} alt="holiday" />
                                    </div>
                                    <div className="card-2-content">
                                        <ul className="card-2-entry">
                                            <li>
                                                <i className="flaticon-calendar"></i>
                                                {data.no_of_people}
                                            </li>
                                        </ul>
                                        <div className="card-2-info">
                                            <h3>
                                                <Link to="/details" state={data}>{data.title}</Link>
                                            </h3>
                                            <div className="card-2-info-price">{data.days}</div>
                                        </div>
                                        <p className="text-justify">{data.short_description}</p>
                                        <div className="card-2-footer">
                                            <div className="card-2-reviews">
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
                                            <div className="card-2-action">

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
</>
    )

}