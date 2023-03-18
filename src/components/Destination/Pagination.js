import React from "react";

export const Pagination = () =>{
    return(
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item disabled">
                <a className="page-link" href="destination" aria-label="Previous">
                    <i className="flaticon-left-chevron" aria-hidden="true"></i>
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="destination">1</a></li>
            <li className="page-item"><a className="page-link" href="destination">2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="destination">3</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="destination" aria-label="Next">
                    <i className="flaticon-right-arrow-angle" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </nav>
    )
}