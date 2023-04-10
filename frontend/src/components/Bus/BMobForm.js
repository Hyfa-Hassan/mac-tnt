import React from 'react'

const BMobForm = () => {
    return (
        <>
            <div style={{ backgroundColor: "#eb2427", height:"50px" }} className="mob-div"></div>
            <div className='mbform' style={{ backgroundColor: 'white' }}>
                <center><h1 className='mbus-heading'>Bus Ticket Booking</h1></center>
                <form >
                    <div className="mobile-search-criteria">
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>From</label>
                            <input type="text" placeholder='Enter your starting point' name="fromm" className='frominp form-control' required />
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>To</label>
                            <input type="text" placeholder='Enter your destination' name="tou" className='frominp form-control' required />


                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-calendar"></i>When?</label>
                            <input type="date" name="whenn" className='wheninp form-control' required />
                        </div>
                        <div className="mobile-booking-button">
                            <button className="btn main-btn full-width" type="submit" value="submit" style={{ backgroundColor: "#eb2427" }}>Search Bus</button>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default BMobForm