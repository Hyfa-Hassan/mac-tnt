import {AppContext} from "../TourPacakge/Context";
import { useContext } from "react";
import OwlCarousel from 'react-owl-carousel';
import {BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


export const PopularPackages = () =>{
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };

    const carous = {
      marginTop: "60px",
      marginBottom: "60px"

    }
    

    const {intpackloading, intpackdata} = useContext(AppContext);
   
return(
    <>
        <div className="container">
                        <div className="section-title section-title-lg">
                            <small>Popular Packages</small>
                            <h2>Amazing Tours Liked By The Adventurous</h2>
                        </div>
        </div>
                
                {(intpackloading) ? (<h1>Loading..</h1>) :
                     <OwlCarousel {...options} style={carous}>   
                    {intpackdata.map((data) => (
                    <div className="item">
                    <div className="card-2">
                        <div className="card-2-image">
                            
                            <img src={data.image} alt="holiday"/>
                        </div>
                        <div className="card-2-content">
                            <ul className="card-2-entry">
                                <li>
                                    <i className="flaticon-user"></i>
                                    {data.no_of_people}
                                </li>
                            </ul>
                            <div className="card-2-info">
                                <h3>
                                    {data.title}
                                </h3>
                                <div className="card-2-info-price"><span>{data.days}</span></div>
                            </div>
                            <p>{data.short_description}</p>
                            <div className="card-2-footer">
                                <div className="card-2-reviews">
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
                                <div className="card-2-action">
                                    
                                    <Link to="/details" state={data}>Explore Tour <i className="flaticon-export"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </OwlCarousel>
                            }

</>

)
}