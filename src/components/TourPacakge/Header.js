import React from "react";

export const Header = () =>{
    return(
        <header className="inner-page-header inner-page-header-1">
            <div className="inner-header-shape"></div>
            {/* <!-- header-content --> */}
            <div className="container">
                <div className="header-content m-auto">
                    <h1>Tour Packages</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Services</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tour Packages</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}