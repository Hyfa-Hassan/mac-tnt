import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
const BusDetails = () => {   //{location}
    const [viewSeats, setViewSeats] = useState(false);
    // const location = useLocation();
    // console.log(location.state)
    const selectedSeats = (e) => {
        console.log("selected seats here")
        setViewSeats(true);
    }
    const dispViewSeats = (e) => {
        console.log("view seats here")
    }
    return (
        <div>
            <div style={{ backgroundColor: "#eb2427", height: "70px" }}></div>
            {/* <div className='inner-bus-div'>
                <h5 className='det-title'>{location.state.title}</h5>
                <div style={{padding:"5px"}}>{location.state.departure}</div>
                <div style={{padding:"5px"}}>{location.state.time}</div>
                <div style={{padding:"5px"}}>{location.state.arrival}</div>
                <p><a href={location.state.link} className='det-link' style={{padding:"5px"}}>View your ticket here</a></p>
                <button className='det-viewbtn' style={{padding:"5px"}}>{location.state.buttonLabel}</button>
                <button className='det-cancelbtn' style={{padding:"5px"}}>{location.state.buttonCanLabel}</button>
            </div> */}
            <div className='fullarea'>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats' onClick={dispViewSeats}>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>
                        <div className='sel-seat-outer flt-lft' id='SeatLayOutRow44'>
                            <div className='sel-seat-cntnr flt-lft'>
                                <div className='sel-seat-left flt-lft'>
                                    <div className='sel-seat-lt-cntnr flt-lft'>
                                        <div className='sel-seat-lt-otr flt-lft'>
                                            <div className='sel-seat flt-lft' style={{minWidth:"328px", height:"144px"}}>
                                                <div className='sel-seat-hdng flt-lft'>
                                                    <div className='sel-seat-hdng flt-lft'>
                                                        <div className='drvr-seat-sec flt-lft'>
                                                            <div className='sel-seat-h bld flt-lft'>
                                                                "L"
                                                                <br/>
                                                                "O"
                                                                <br/>
                                                                "W"
                                                                <br/>
                                                                "E"
                                                                <br/>
                                                                "R"
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='seat-sectn flt-lft'>
                                                        <ul className='seat-row flt-rt'>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_0' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_1' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_2' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_3' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_4' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                            <li style={{top:"0px", left:"24px", position:"absolute", padding : "0px"}}>
                                                                <a href='#' id='seat_44_5' className='rail-sprite psngr-seat-avl' onClick={selectedSeats}></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
                <div className='inner-bus-details'>
                    <div className='result-item'>
                        <div className='result-bus'>
                            <div className='pass-name'>Baru Travels</div>
                            <div>A/C Seater / Sleeper</div>
                            <div>< a href='#'>Cancel Ticket</a></div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='dep-arroe rail-sprite'>Departure</span>
                            </div>
                            <div>10:15 PM</div>
                        </div>
                        <div className='bus-sector'>
                            <div className='dep'>
                                <span className='clock-icon rail-sprite'></span>
                            </div>
                            <div>11 H 45 M</div>
                        </div>
                        <div className='bus-sctr-container'>
                            <div className='bus-sector' title='^^<Kashmiri Gate 10 00 AM>'>
                                <div className='dep'>
                                    <span className='arr-arrow rail-sprite'>Arrival</span>
                                </div>
                                <div className='bus-sctr-time'>10:00 AM</div>
                            </div>
                            <div className='bus-nxtdy-container'>
                                <div className='bus-nxtdy-dtls'>Next Day</div>
                            </div>
                        </div>
                        <div className='bus-mid-sector'>
                            <div className='seat-icon rail-sprite'></div>
                            <div>22</div>
                        </div>
                        <div className='price-bus'>
                            <div className='totel-fare'>Rs. 1416 / 1700</div>
                            <div className='sort-by-section'>
                                <div className='sort-seats-btn'>
                                    <a href='#' className='view-seats'>VIEW SEATS <span className='arrow-small rail-sprite'></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='clear'></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusDetails;