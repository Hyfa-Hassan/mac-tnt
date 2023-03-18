import react from 'react'

export const Header = () =>{
    return(
        <header className="inner-page-header inner-page-header-3">
            <div className="inner-header-shape"></div>
            {/* <!-- header-content --> */}
            <div className="container">
                <div className="header-content m-auto">
                    <h1>Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}