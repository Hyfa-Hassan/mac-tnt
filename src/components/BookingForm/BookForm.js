import React from 'react'
import { useState , useRef} from 'react';
import emailjs from "emailjs-com"

// import axios from 'axios';
// import { addDetails } from '../api/apienquiry';

const BookForm = () => {
	const formRef = useRef();
	const [inputValues, setInputValue] = useState({

		first_name: "",
		last_name: "",
		email_id: "",
		contact_number: "",
		tour_date: "",
		no_of_days: "",
		adults: "",
		children: "",
		tour_package: ""

	});

	function handleChange(event) {
		const { name, value } = event.target;

		setInputValue({ ...inputValues, [name]: value }); //inputvalues-->inputs passsed in usestate
	}
	const sendEmail = (e) => {
        // e.preventDefault();
        console.log("email testing here")
        emailjs.sendForm('service_ngn73ph', 'template_w60qdx9', formRef.current, '3lx_dX78J3iP-EqN3')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          });
      };
	const handlesubmit = async (e) => {
		e.preventDefault();
		const { first_name, last_name, email_id, contact_number, tour_date, no_of_days, adults, children, tour_package } = inputValues;
		console.log(inputValues);
		// try{
		const res = await fetch("http://localhost:3004/enquiry/test", {  //api/enquiry/test
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				{
					first_name,
					last_name,
					email_id,
					contact_number,
					tour_date,
					no_of_days,
					adults,
					children,
					tour_package
				}
			)
		}
		)
		const data = await res.json();
		console.log(data)
		if (res.status === 404 || !data) {
			window.alert("invalid details")
		}
		else {
			window.alert("Reservation successful")
		}
		sendEmail();
		setInputValue({
			first_name: "",
			last_name: "",
			email_id: "",
			contact_number: "",
			tour_date: "",
			no_of_days: "",
			adults: "",
			children: "",
			tour_package: ""
		})
	}
return (
	<>
		<header className="inner-page-header inner-page-header-4">
			<div className="inner-header-shape"></div>
			{/* <!-- header-content --> */}
			<div className="container">
				<div className="header-content m-auto">
					<h1>Enquire Now</h1>
				</div>
			</div>
		</header>
		<div className="authentication-section pb-100 position-relative">
			<div className="map-shapes d-none d-md-block">
				<div className="map-shape map-shape-2 map-shape-vertical-top">
					<img src="assets/images/shapes/map-2.png" alt="shape" />
				</div>
			</div>
		</div>
		<div id="booking" className="section">
			<div className="section-center">
				<div className="container">
					<div className="row">
						<div className="booking-form">
							<div className="booking-bg">
								<div className="form-header">
									<h2>Make your reservation</h2>
									<p className='text-justify'>Experience the adventure of a lifetime and create unforgettable memories. Book your tour now!</p>
								</div>
							</div>
							<form method="post" ref={formRef} onSubmit={handlesubmit}>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">First Name</span>
											<input className="form-control" name="first_name" type="text" placeholder='E.g; John' value={inputValues.first_name} required onChange={handleChange} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Last Name</span>
											<input className="form-control" name="last_name" type="text" placeholder='E.g; Doe' value={inputValues.last_name} required onChange={handleChange} />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Email Id</span>
											<input className="form-control" name="email_id" type="email" placeholder='E.g; youremail@gmail.com' value={inputValues.email_id} required onChange={handleChange} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Contact Number</span>
											<input className="form-control" name="contact_number" type="number" placeholder='E.g; 0123456789' value={inputValues.contact_number} required onChange={handleChange} />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Tour Date</span>
											<input className="form-control" name="tour_date" type="date" value={inputValues.tour_date} required onChange={handleChange} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">No. of Day/Days</span>
											<input className="form-control" name="no_of_days" type="number" placeholder='E.g; 1 or 2 or 3...' value={inputValues.no_of_days} required onChange={handleChange} />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Adults</span>
											<input className="form-control" name="adults" type="number" placeholder='E.g; 2' value={inputValues.adults} required min="1" onChange={handleChange} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Children</span>
											<input className="form-control" name="children" type="number" placeholder='E.g; 1' value={inputValues.children} required min="0" onChange={handleChange} />
										</div>
									</div>
								</div>
								<div className="form-group">
									<span className="form-label">Tour Package</span>
									<input className="form-control" name="tour_package" type="text" placeholder='E.g; Single tour or Round trip' value={inputValues.tour_package} required onChange={handleChange} />

								</div>
								<div className="form-btn">
									<button type="submit" className="submit-btn">Book Now</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	</>
)
}

export default BookForm