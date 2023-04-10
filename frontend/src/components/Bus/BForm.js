import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom"

import BusDetails from "./BusDetails";
import BMobForm from './BMobForm';
import "./Buss.css";


const BForm = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const navigate = useNavigate();

  const handleSwap = () => {
    console.log("swap button here")
    setFromValue(toValue);
    setToValue(fromValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   title: 'My Bus Ticket',
    //   link: 'http://example.com',
    //   buttonLabel: 'View Ticket',
    // };
    // const data="hey details bus"
    navigate('/bus-details'
    // , {
      // state: {
      //   title: 'My Bus Ticket',
      //   departure: "07:00 PM",
      //   time: "39 H",
      //   arrival: "10:00 AM",
      //   link: '#',
      //   buttonLabel: 'View Ticket',
      //   buttonCanLabel: 'Cancel Ticket',
      // },{
      //   title: 'My Bus Ticket',
      //   link: 'http://example.com',
      //   buttonLabel: 'View Ticket',
      // },{
      //   title: 'My Bus Ticket',
      //   link: 'http://example.com',
      //   buttonLabel: 'View Ticket',
      // }]
  // }}
  );
  }
  return (
    <>
      <div style={{ position: 'relative' }} className="mmform">
        <div className=''>
          <img src='assets/images/bus1.jpg' style={{ width: "100%" }} />
        </div>
        <div className='busform'
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
          <h2 className='busheading'>Bus Ticket Booking</h2>
          <div className='insideform-div'>
            <form onSubmit={handleSubmit}>
              <label style={{ margin: '0.5rem' }}>From</label>
              <input type="text" placeholder='Select Departure City' name="from" value={fromValue} onChange={e => setFromValue(e.target.value)} className='frominp form-control b-in' required />
              <button type="button" style={{ margin: '0.5rem', background: "none", color: "#eb2427" }} onClick={handleSwap}>↔</button>
              <label style={{ margin: '0.5rem' }}>To</label>
              <input type="text" placeholder='Select Destination City' name="to" value={toValue} onChange={e => setToValue(e.target.value)} className='frominp form-control b-in' required />
              <label style={{ margin: '0.5rem' }}>On</label>
              <input type="date" name="date" className='frominp form-control date-bus b-in' required />
              <button className='btnn' style={{ margin: '0.5rem' }}>GO</button>
            </form>
          </div>
        </div>
      </div>
      <BMobForm />
    </>
  )
}

export default BForm;