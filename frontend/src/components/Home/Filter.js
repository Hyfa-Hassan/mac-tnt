import react, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com"
import Alert from 'react-bootstrap/Alert';

export const Filter = () => {
    const options2 = [
        "Choose Destination",
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
    const options3 = [
        "Select Your Travel Type",
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour"
    ]
    const [showElement, setShowElement] = useState(false)
    const formRef = useRef();
    const [inputsAll, setInputsAll] = useState({
        tou: "",
        whenn: "",
        traveltype: "",
        guest: "",
        contact: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputsAll({ ...inputsAll, [name]: value });
        // console.log(inputsAll)
    }
    const sendEmail = (e) => {
        // e.preventDefault();
        console.log("email testing here")
        // emailjs.sendForm('service_ngn73ph', 'template_07f6mie', formRef.current, '3lx_dX78J3iP-EqN3')
        //   .then((result) => {
        //       console.log(result.text)
        //   }, (error) => {
        //       console.log(error.text)
        //   });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("homeform here")
        const { tou, whenn, traveltype, guest, contact } = inputsAll;
        console.log(inputsAll)
        const res = await fetch("http://localhost:3004/homeform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    tou,
                    whenn,
                    traveltype,
                    guest,
                    contact,
                }
            )
        })
        const data = await res.json();
        console.log(data)
        if (res.status === 404 || !data) {
            window.alert("invalid details")
        }
        else {
            setTimeout(function () {
                setShowElement(false)
            }, 500);
            setShowElement(true)
        }
        sendEmail();
        setInputsAll({
            tou: "",
            whenn: "",
            traveltype: "",
            guest: "",
            contact: "",
        })
    }
    return (
        <header className="header-banner fixed-header-banner">
            <div className="booking-search">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="booking-search-inputs">
                        <div className="booking-search-input-item">
                            <div className="booking-input">
                                <label>
                                    <i className="flaticon-placeholder-point"></i>
                                    Where To?
                                </label>
                                <select value={inputsAll.tou} name="tou" required onChange={handleChange}>
                                    {options2.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="booking-search-input-item">
                            <div className="booking-input">
                                <label>
                                    <i className="flaticon-calendar"></i>
                                    When?
                                </label>
                                <input type="date" placeholder="Select Your Day" className="" name='whenn' value={inputsAll.whenn} required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="booking-search-input-item">
                            <div className="booking-input">
                                <label>
                                    <i className="flaticon-plane"></i>
                                    Travel Type
                                </label>
                                <select value={inputsAll.traveltype} name="traveltype" required onChange={handleChange}>
                                    {options3.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {/* <select className="travelType">
                                    <option value="">Select Your Travel Type</option>
                                    <option value="2">The Weekend Break</option>
                                    <option value="3">The Package Holiday</option>
                                    <option value="4">The Group Tour</option>
                                </select> */}
                            </div>
                        </div>
                        <div className="booking-search-input-item">
                            <div className="booking-input">
                                <label>
                                    <i className="flaticon-user-1"></i>
                                    Guests
                                </label>
                                <input type="number" placeholder="Number Of Guests" className="guest guest-input" name='guest' value={inputsAll.guest} required onChange={handleChange} />
                                {/* <div className="guest-popup">
                                    <div className="guest-popup-item">
                                        <div className="guest-popup-label">
                                            <h4>Adults</h4>
                                            <p>Ages 12 Years or above</p>
                                        </div>
                                        <div className="guest-popup-counter">
                                            <button className="counter-btn counter-dec">-</button>
                                            <input type="text" className="counter-input" value="0"/>
                                            <button className="counter-btn counter-inc">+</button>
                                        </div>
                                    </div>
                                    <div className="guest-popup-item">
                                        <div className="guest-popup-label">
                                            <h4>Childs</h4>
                                            <p>Ages 02 to 11 Years</p>
                                        </div>
                                        <div className="guest-popup-counter">
                                            <button className="counter-btn counter-dec">-</button>
                                            <input type="text" className="counter-input" value="0"/>
                                            <button className="counter-btn counter-inc">+</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div >
                        </div>
                        <div className="booking-search-input-item">
                            <div className="booking-input">
                                <label>
                                    <i className="flaticon-telephone"></i>
                                    Contact Details
                                </label>
                                <input type="number" placeholder="Contact Number" className="guest guest-input" name='contact' value={inputsAll.contact} required onChange={handleChange} />
                            </div >
                            <div className="booking-search-button" >
                                <button className="btn main-btn" type="submit" style={{ backgroundColor: "#eb2427" }}>GO
                                    {/* <i className="flaticon-searching"></i> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        {showElement ? <div className='contactmsg mt-3' ><Alert variant='success'>
                            Done
                        </Alert></div> : <></>}
                    </div>
                </form>
            </div>
            {/* <!-- header-content --> */}
            <div className="container-fluid">
                <div className="header-content">
                    <h1>Plan Your Best Holiday With Us & Enjoy</h1>
                    <Link to="/tours" className="btn main-btn main-btn-arrow" style={{ backgroundColor: "#eb2427" }}>See All Tour <i className="flaticon-right-arrow"></i></Link>
                </div>
            </div>
            <div className="scroll-parallax" id="parallax">
                <div className="parallax-layer parallax-layer-0 parallax" data-speed="66">
                    {/* <img src="assets/images/homepage-1/header-part-5.png" alt="header"/>  */}
                </div>
                <div className="parallax-layer parallax-layer-1 parallax" data-speed="50">
                    {/* <img src="assets/images/homepage-1/header-part-4.png" alt="header"/> */}
                </div>
                <div className="parallax-layer parallax-layer-2 parallax" data-speed="40">
                    {/* <img src="assets/images/homepage-1/header-part-3.png" alt="header"/>  */}
                </div>
                <div className="parallax-layer parallax-layer-3 parallax" data-speed="33">
                    {/* <img src="assets/images/homepage-1/header-part-2.png" alt="header"/>  */}
                </div>
                <div className="parallax-layer parallax-layer-4 parallax" data-speed="20">
                    {/* <img src="assets/images/homepage-1/header-part-1.png" alt="header"/>  */}
                </div>
                <div className="parallax-layer parallax-cover" ></div>
            </div>

        </header>


    )

} 
