import react from 'react';
import { Filter } from '../components/Home/Filter';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobFilter } from '../components/Home/Mobfilter';
import { HolidayPlaces } from '../components/Home/HolidayPlaces';
import { PopularPackages } from '../components/Home/PopularPackages';
import { TourType } from '../components/Home/TourType';
import { Testimonials } from '../components/Home/Testimonials';
import { AppDownload } from '../components/Common/AppDownload';
import { Blog } from '../components/Home/Blog';
import { useState,useEffect } from 'react';
import axios from 'axios';


export const HomePage = () =>{

    // const [packdata, setpackdata] = useState([]);
    // const [loading,setloading] = useState(false);

    // useEffect(()=>{
    //     const fetchdata = async () =>{
    //         setloading(true);
    //         const data = await axios.get('http://localhost:3004/api/products');
    //         console.log("products >>>>", data.data.products);
    //         setpackdata(data.data.products);
    //         setloading(false);
    //     };
    //     fetchdata();
    // }, []);

return(

        <>
            <Filter/>
            
            <MobFilter/>
            
            {/* <HolidayPlaces packages={packdata} loadingStatus={loading}/> */}
            
           <HolidayPlaces/>

            <PopularPackages/> 
            
            <TourType/>
            
            <Testimonials/>
        
            <AppDownload/>
            
            {/* <Blog/>  */}
        </>
    )
}