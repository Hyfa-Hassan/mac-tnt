import React from "react";

export const Header = () =>{
    return(
        <header class="inner-page-header inner-page-header-4">
            <div class="inner-header-shape"></div>
            {/* <!-- header-content --> */}
            <div class="container">
                <div class="header-content m-auto">
                    <h1>FAQ's</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">FAQ's</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}


// Hello Maclareen TNT,

// Someone wants to book the Flight from {{fromm}} to {{tou}} on {{whenn}} for {{traveltype}}. They are {{guest}} guests and their contact number is {{contact}}

// Best wishes,

// Maclareen team