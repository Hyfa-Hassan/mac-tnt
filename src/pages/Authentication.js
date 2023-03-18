import react from 'react';
import { AuthForm } from '../components/Authentication/AuthForm';
import { Header } from '../components/Authentication/Header';

export const Authentication = () =>{
    return(
        <div>
    
        {/* <!-- Header --> */}
        <Header/>
        {/* <!-- Header --> */}
        {/* <!-- Authentication --> */}
        <AuthForm/>
        {/* <!-- Authentication --> */}

    </div>
    )
}