import React, { useState, useRef } from 'react'
import MForm from './MForm';
import emailjs from "emailjs-com"
import "./Formstyle.css";
import Alert from 'react-bootstrap/Alert';

const Form = () => {
    const options = [
        "Choose Starting Point",
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
        "One Way",
        "Round Trip"
    ]
    const [showElement, setShowElement] = useState(false)
    const formRef = useRef();
    const [inputsAll, setInputsAll] = useState({
        fromm: "",
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
    // const sendEmail = (e) => {
    //     // e.preventDefault();
    //     console.log("email testing here")
    //     emailjs.sendForm('service_r1whife', 'template_wnohpwx', formRef.current, '52Y_rV9mRFW5SPK1U')
    //         .then((result) => {
    //             console.log(result.text)
    //         }, (error) => {
    //             console.log(error.text)
    //         });
    // };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { fromm, tou, whenn, traveltype, guest, contact } = inputsAll;
        console.log(inputsAll)
        // try{
        const res = await fetch("http://localhost:3004/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    fromm,
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
        // sendEmail();
        setInputsAll({
            fromm: "",
            tou: "",
            whenn: "",
            traveltype: "",
            guest: "",
            contact: "",
        })
    }
    return (
        <>
            <header className="header-banner fixed-header-banner" style={{ backgroundColor: "rgba(255, 165, 0, 0.6)" }}>
                <div ><center><h1 className='formheading' >Plan Your Best Holiday With Us & Enjoy</h1></center> </div>

                <div className="booking-search flight-filter">

                    <form id='form-containerr' ref={formRef} onSubmit={handleSubmit}>
                        <div className="booking-search-inputs">
                            <div className="booking-search-input-item">
                                <div className="booking-input">
                                    <label>
                                        <i className="flaticon-placeholder-point"></i>
                                        From
                                    </label>
                                    <select value={inputsAll.fromm} name="fromm" required onChange={handleChange}>
                                        {options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    {/* <input type="text" placeholder="Where Are You Going" id="location"/> */}
                                </div>
                            </div>
                            <div className="booking-search-input-item">
                                <div className="booking-input">
                                    <label>
                                        <i className="flaticon-placeholder-point"></i>
                                        To
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
                                </div>
                            </div>
                            <div className="booking-search-input-item">
                                <div className="booking-input">
                                    <label>
                                        <i className="flaticon-user-1"></i>
                                        Guest
                                    </label>
                                    <input type="number" placeholder="Number Of Guest" className="guest guest-input" name='guest' value={inputsAll.guest} required onChange={handleChange} />

                                </div>
                                <div className="booking-search-input-item">
                                    <div className="booking-input">
                                        <label>
                                            <i className="flaticon-telephone"></i>
                                            Contact Detail
                                        </label>
                                        <input type="number" placeholder="Contact Number" className="guest guest-input" name='contact' value={inputsAll.contact} required onChange={handleChange} />

                                    </div>
                                </div>
                                <div className="booking-search-button">
                                    <button className="btn main-btn" type="submit" value="submit" style={{ backgroundColor: "#eb2427" }}>
                                        <i className="enterData">Go</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            {showElement ? <div className='contactmsg mt-3' ><Alert variant='success'>
                                Success
                            </Alert></div> : <></>}
                        </div>
                    </form>
                </div>
                <div>
                    <MForm />
                </div>


                {/* <!-- header-content --> */}

                {/* <div>
            <center><h1>Plan Your Best Holiday With Us & Enjoy</h1></center>
                    <img src="assets/images/homepage-1/header-part-3.png" alt="header"/> 
            </div>  */}


                <div className="scroll-parallax" id="parallax">
                    <div className="parallax-layer parallax-layer-0 parallax" data-speed="66">
                        <img src="assets/images/homepage-1/header-part-5.png" alt="header" />
                    </div>
                    <div className="parallax-layer parallax-layer-1 parallax" data-speed="50">
                        <img src="assets/images/homepage-1/header-part-4.png" alt="header" />
                    </div>
                    <div className="parallax-layer parallax-layer-2 parallax" data-speed="40">
                        <img src="assets/images/homepage-1/header-part-3.png" alt="header" />
                    </div>
                    <div className="parallax-layer parallax-layer-3 parallax" data-speed="33">
                        <img src="assets/images/homepage-1/header-part-2.png" alt="header" />
                    </div>
                    <div className="parallax-layer parallax-layer-4 parallax" data-speed="20">
                        <img src="assets/images/homepage-1/header-part-1.png" alt="header" />
                    </div>
                    <div className="parallax-layer parallax-cover" ></div>
                </div>


            </header>
        </>
    )
}

export default Form;