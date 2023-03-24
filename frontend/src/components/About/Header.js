import React from 'react'

const Header = () => {
  return (
    <header className="inner-page-header inner-page-header-1">
            <div className="inner-header-shape"></div>
            {/* <!-- header-content --> */}
            <div className="container">
                <div className="header-content m-auto">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header