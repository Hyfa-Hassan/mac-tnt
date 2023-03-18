import React, { useState , useRef} from 'react'
import emailjs from "emailjs-com"
import "./Formstyle.css";

const MForm = () => {
    const options = [
        "Choose one",
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
        "Choose one",
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
        emailjs.sendForm('service_ngn73ph', 'template_07f6mie', formRef.current, '3lx_dX78J3iP-EqN3')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          });
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("called")
        const {fromm, tou, whenn, traveltype, guest, contact} = inputsAll;
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
			window.alert("Flight Booked")
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
            <div className='mform' style={{backgroundColor: 'white'}}>
            <center><h1>Plan Your Best Holiday With Us & Enjoy</h1></center> 
                <form action="#" className="MForm" ref={formRef} onSubmit={handleSubmit}>
                    <div className="mobile-search-criteria">
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>Source</label>
                            <select value={inputsAll.fromm} name="fromm" className='frominp form-control' required onChange={handleChange}>
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-placeholder-point"></i>Destination</label>
                            <select value={inputsAll.tou} name="tou" className='destinp form-control' required onChange={handleChange}>
                                {options2.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {/* <select className="location">
                                <option value="">Where You Starting From</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select> */}
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
                            {/* <select className="travelType">
                                <option value="">Select Your Travel Type</option>
                                <option value="2">One Way</option>
                                <option value="3">Round Trip</option>
                            </select> */}
                        </div>
                        <div className="mobile-search-item">
                            <label><i className="flaticon-user-1"></i>Guest</label>
                            <input type="number" placeholder="Enter the Number Of Guests" className="guest guest-input guestinp form-control" value={inputsAll.guest} name="guest" required onChange={handleChange} />
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
                            <input type="number" placeholder="Enter the valid Mobile number" className="guest guest-input continp form-control" value={inputsAll.contact} name="contact" required onChange={handleChange} />
                        </div>
                        <div className="mobile-booking-button">
                            <button className="btn main-btn full-width" type="submit" value="submit">Book Now</button>
                        </div>
                    </div>
                </form>
            </div >
            <div className="scroll-parallax flight-heading mt-267" id="parallax ">
                {/* <div><h1 className='text-center'>flight</h1></div> */}
                {/* <center><h1>Plan Your Best Holiday With Us & Enjoy</h1></center> */}
                <img src="assets/images/flight.jpg" alt="header" />
            </div>
        </>
    )
}

export default MForm;