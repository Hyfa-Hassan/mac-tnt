import react from 'react';
import { Form } from '../components/Contact/Form';
import { Header } from '../components/Contact/Header';
import { Map } from '../components/Contact/Map';

export const Contact = () =>{
    return(
        <div>
        {/* <!-- Header --> */}
        <Header/>
        {/* <!-- Header --> */}
        {/* <!-- Contact Form --> */}
        <Form/>
        {/* <!-- Contact Form--> */}
        {/* <!-- Iframe Map--> */}
        <Map/>
        {/* <!-- Iframe Map--> */}

    </div>
    )
}