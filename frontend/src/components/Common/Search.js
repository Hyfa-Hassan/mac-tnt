import React from "react";

export const Search = () =>{
return(
    <div className="searchbar-wrapper">
            <div className="searchbar-body">
                <div className="searchbar-close page-searchbar-close">
                    <i className="flaticon-close"></i>
                </div>
                <div className="searchbar-form">
                    <img src="assets/images/logo.png" alt="logo"/>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Search*" className="form-control" required/>
                            <button className="btn main-btn" type="submit">Search Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)

}