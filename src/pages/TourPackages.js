import React from "react";
import { Header } from "../components/TourPacakge/Header";
import { PackagesList } from "../components/TourPacakge/PackagesList";
import { Pagination } from "../components/TourPacakge/Pagination";

export const TourPackages = () =>{
    return(
 <div>
        
        {/* <!-- Header --> */}
        <Header/>

        {/* <!-- Tour --> */}
        <PackagesList/>

        {/* <!-- Pagination --> */}
        <Pagination/>

    </div>

    )
}