import react from 'react';

export const Header = () =>{
    return(
        <header className="inner-page-header inner-page-header-1">
            <div className="inner-header-shape"></div>
            {/* <!-- header-content --> */}
            <div className="container">
                <div className="header-content m-auto">
                    <h1>Destination</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Sevices</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Destination</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}