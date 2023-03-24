import react from 'react';

export const Pagination = () =>{
    return(
        <nav aria-label="Page navigation example">
        <ul className="pagination" >
            <li className="page-item disabled">
                <a className="page-link" href="tours" aria-label="Previous">
                    <i className="flaticon-left-chevron" aria-hidden="true" ></i>
                </a>
            </li>
            <li className="page-item active" >
                <a className="page-link" href="tours" style={{backgroundColor:"#eb2427"}}>1</a></li>
            <li className="page-item"><a className="page-link" href="tours">2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="tours">3</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="tours" aria-label="Next">
                    <i className="flaticon-right-arrow-angle" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </nav>
    )
}