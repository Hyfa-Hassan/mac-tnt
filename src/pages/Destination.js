import react from 'react';
import { DestinationList } from '../components/Destination/DestinationList';
import { Header } from '../components/Destination/Header';

export const Destination = () =>{
    return(
        <div>
        {/* <!-- Header --> */}
        <Header/>
        {/* <!-- Header --> */}

        {/* <!-- Destination --> */}
        <DestinationList/>
        {/* <!-- Destination --> */}

    </div>
    )
}