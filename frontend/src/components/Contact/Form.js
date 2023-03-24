import react from 'react';
import { useState, useRef } from 'react';
import emailjs from "emailjs-com"
import Alert from 'react-bootstrap/Alert';

export const Form = () => {
    const [showElement, setShowElement] = useState(false)
    const formRef = useRef();
    const [inputsAll, setInputsAll] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        tandc: false,
    })
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setInputsAll({ ...inputsAll, [name]: type === 'checkbox' ? checked : value });
        // console.log(inputsAll)
    }
    // const sendEmail = (e) => {
    //     // e.preventDefault();
    //     console.log("email testing here")
    //     emailjs.sendForm('service_ngn73ph', 'template_w60qdx9', formRef.current, '3lx_dX78J3iP-EqN3')
    //       .then((result) => {
    //           console.log(result.text)
    //       }, (error) => {
    //           console.log(error.text)
    //       });
    //   };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("called")
        const { name, email, phone, subject, message, tandc } = inputsAll;
        // console.log(inputsAll)
        const res = await fetch("http://localhost:3004/contactus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    name,
                    email,
                    phone,
                    subject,
                    message,
                    tandc
                }
            )
        })
        const data = await res.json();
        // console.log(data)
        if (res.status === 404 || !data) {
            // window.alert("Please fill the details")
            console.log("Please fill the details")
        }
        else {
            // window.alert("Contacted successfully")
            setTimeout(function () {
                setShowElement(false)
            }, 2000);
            setShowElement(true)
        }
        // sendEmail();
        setInputsAll({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            tandc: false
        })
    }
    return (
        <div className="contact-section pt-100 pb-70 position-relative">
            <div className="map-shapes">
                <div className="map-shape map-shape-1 map-shape-top">
                    <img src="assets/images/shapes/map-1.png" alt="shape" />
                </div>
                <div className="map-shape map-shape-2 map-shape-bottom">
                    <img src="assets/images/shapes/map-2.png" alt="shape" />
                </div>
            </div>
            <div className="container">
                <div className="row mb-30">
                    <div className="col-lg-6 pb-30">
                        <div className="contact-grid-item contact-grid-bg"></div>
                    </div>
                    <div className="col-lg-6 pb-30 desk-pad-left-40">
                        <div className="contact-grid-item">
                            <div className="section-title about-title section-title-left text-start">
                                <small style={{color:"#eb2427"}}>Contact With Us</small>
                                <h2>We'll Love To Hear From You</h2>
                            </div>
                            <form method='post' ref={formRef} className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-group mb-20">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Name*" value={inputsAll.name} required onChange={handleChange} />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group mb-20">
                                    <input className="form-control" name="email" type="email" id="email" placeholder="Email*" value={inputsAll.email} required onChange={handleChange} />                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group mb-20">
                                    <input type="number" name="phone" id="phone" className="form-control" placeholder="Phone No.*" value={inputsAll.phone} required onChange={handleChange} />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group mb-20">
                                    <input type="text" name="subject" id="subject" className="form-control" placeholder="Email Subject*" value={inputsAll.subject} required onChange={handleChange} />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group mb-20">
                                    <textarea name="message" className="form-control" id="message" rows="6" placeholder="Your Message*" value={inputsAll.message} required onChange={handleChange}></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="input-checkbox mb-20" >
                                    <input type="checkbox" id="check1" name='tandc' checked={inputsAll.tandc} value="true" onChange={handleChange} />
                                    <label for="check1">I have read all <a href="tandc" style={{color:"#eb2427"}}>terms & condition</a> & <a href="privacy" style={{color:"#eb2427"}}>privacy policy</a>.</label>
                                </div>
                                <div className="col-12">
                                    <button className="btn main-btn main-btn-arrow" type="submit" value="submit" style={{backgroundColor:"#eb2427"}}>Send Message <i className="flaticon-right-arrow"></i></button>
                                    <div id="msgSubmit"></div>
                                   
                                </div>
                                <div className='col-md-4 col-lg-6'>
                                {showElement ? <div className='contactmsg mt-3' ><Alert variant='success'>
                                        Done
                                    </Alert></div> : <></>}    
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-sm-6 col-lg-4 pb-30">
                        <div className="contact-info-item desk-pad-right-10">
                            <small>Address Of</small>
                            <h2>Paris</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <ul>
                                <li>
                                    <i className="flaticon-mail"></i>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#97fff2fbfbf8f1e5f6f9f4ffd7e3e5f6fee7b9f4f8fa"><span className="__cf_email__" data-cfemail="7119141d1d1e1703101f12193105031018015f121e1c">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <i className="flaticon-telephone"></i>
                                    <a href="tel:+33-5346-337">+33 5346 337</a>
                                </li>
                                <li>
                                    <i className="flaticon-address"></i>
                                    2 Twistar Buildings, Franch, CH2 5GT.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 pb-30">
                        <div className="contact-info-item desk-pad-left-10 desk-pad-right-10">
                            <small>Address Of</small>
                            <h2>London</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <ul>
                                <li>
                                    <i className="flaticon-mail"></i>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#91f9f4fdfdfefdfefff5feffd1e5e3f0f8e1bff2fefc"><span className="__cf_email__" data-cfemail="2f474a4343404340414b40416f5b5d4e465f014c4042">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <i className="flaticon-telephone"></i>
                                    <a href="tel:+44-5346-337">+44 5346 338</a>
                                </li>
                                <li>
                                    <i className="flaticon-address"></i>
                                    3 Edgar Buildings, England, BA1 2FJ.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 pb-30 offset-sm-3 offset-lg-0">
                        <div className="contact-info-item desk-pad-left-20">
                            <small>Address Of</small>
                            <h2>New York</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <ul>
                                <li>
                                    <i className="flaticon-mail"></i>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#472f222b2b28293e073335262e376924282a"><span className="__cf_email__" data-cfemail="751d1019191a1b0c350107141c055b161a18">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <i className="flaticon-telephone"></i>
                                    <a href="tel:+1-5346-337">+1 5346 338</a>
                                </li>
                                <li>
                                    <i className="flaticon-address"></i>
                                    4 Bell Jeorge Road, New York, 10001.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}