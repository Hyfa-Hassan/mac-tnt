import React, { useState, useRef } from 'react'
import emailjs from "emailjs-com"
import "./Formstyle.css";

const MForm = () => {

    const options3 = [
        "Select Your Travel Type",
        "One Way",
        "Round Trip"
    ]
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
    const sendEmail = (e) => {
        // e.preventDefault();
        console.log("email testing here")
        emailjs.sendForm('service_r1whife', 'template_wnohpwx', formRef.current, '52Y_rV9mRFW5SPK1U')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          });
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("called")
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
            window.alert("Done")
        }
        sendEmail();
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
            <div className='mform' style={{ backgroundColor: 'white' }}>
                <center><h1>Plan Your Best Holiday With Us & Enjoy</h1></center>
                <form action="#" className="MForm" ref={formRef} onSubmit={handleSubmit}>
                    <div className="mobile-search-criteria">
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>Source</label>
                            {/* <select value={inputsAll.fromm} name="fromm" className='frominp form-control' required onChange={handleChange}>
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select> */}
                            <input type="text" placeholder='Enter your starting point' name="fromm" value={inputsAll.fromm} className='frominp form-control' required onChange={handleChange} />
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>Destination</label>
                            {/* <select value={inputsAll.tou} name="tou" className='destinp form-control' required onChange={handleChange}>
                                {options2.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select> */}
                            <input type="text" placeholder='Enter your destination' name="tou" value={inputsAll.tou} className='frominp form-control' required onChange={handleChange} />


                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-calendar"></i>When?</label>
                            <input type="date" value={inputsAll.whenn} name="whenn" className='wheninp form-control' required onChange={handleChange} />
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-plane"></i>Travel Type</label>
                            <select value={inputsAll.traveltype} name="traveltype" className='travelinp form-control' required onChange={handleChange}>
                                {options3.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-user-1"></i>Guest</label>
                            <input type="number" placeholder='Enter the number of Guests' name="guest" value={inputsAll.guest} className='frominp form-control' required onChange={handleChange} />
                            {/* <div className="guest-popup">
                                <div className="guest-popup-item">
                                    <div className="guest-popup-label">
                                        <h4>Adults</h4>
                                        <p>Ages 12 or above</p>
                                    </div>
                                    <div className="guest-popup-counter">
                                        <button className="counter-btn counter-dec">-</button>
                                        <input type="text" className="counter-input" value="0" />
                                        <button className="counter-btn counter-inc">+</button>
                                    </div>
                                </div>
                                <div className="guest-popup-item">
                                    <div className="guest-popup-label">
                                        <h4>Childs</h4>
                                        <p>Ages Between 2 - 11 Years</p>
                                    </div>
                                    <div className="guest-popup-counter">
                                        <button className="counter-btn counter-dec">-</button>
                                        <input type="text" className="counter-input" value="0" />
                                        <button className="counter-btn counter-inc">+</button>
                                    </div>
                                </div>
                                <div className="mobile-search-item">
                                    <label>
                                        <i className="flaticon-calendar"></i>
                                        Contact Detail
                                    </label>
                                    <input type="number" placeholder="Contact Number" className="datepicker" />
                                </div>
                            </div> */}
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-telephone"></i>Contact Number</label>
                            <input type="number" placeholder='Enter your mobile number' name="contact" value={inputsAll.contact} className='frominp form-control' required onChange={handleChange} />
                        </div>
                        <div className="mobile-booking-button">
                            <button className="btn main-btn full-width" type="submit" value="submit" style={{ backgroundColor: "#eb2427" }}>Book Now</button>
                        </div>
                    </div>
                </form>
            </div >
            <div className="scroll-parallax flight-heading mt-267" id="parallax ">
                {/* <div><h1 className='text-center'>flight</h1></div> */}
                {/* <center><h1>Plan Your Best Holiday With Us & Enjoy</h1></center> */}
                {/* <img src="assets/images/flight.jpg" alt="header" /> */}
            </div>
        </>
    )
}

export default MForm;