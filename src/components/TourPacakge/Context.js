import react, { createContext } from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [packdata, setpackdata] = useState([]);
    const [loading,setloading] = useState(false);
    const [destdata, setdestdata] = useState([]);
    const [destloading,setdestloading] = useState(false);
    const [countrydata, setcountrydata] = useState([]);
    const [countryloading,setcountryloading] = useState(false);
    const [intpackdata, setintpacktdata] = useState([]);
    const [intpackloading,setintpackloading] = useState(false);

    useEffect(()=>{
        const fetchdata = async () =>{
            setloading(true);
            const data = await axios.get('http://localhost:3004/api/products');
            //console.log("products >>>>", data.data.products);
            setpackdata(data.data.products);
            setloading(false);
        };
        const destdata = async () =>{
            setdestloading(true);
            const data = await axios.get('http://localhost:3004/api/destinations');
            //console.log("destination >>>>", data.data.Destination);
            setdestdata(data.data.Destination);
            setdestloading(false);
        };
        const internationaldata = async () =>{
            setintpackloading(true);
            const data = await axios.get('http://localhost:3004/api/products/international');
            //console.log("type >>>>", data.data.intpack);
            setintpacktdata(data.data.intpack);
            setintpackloading(false);
        };
        // const countrydata = async () =>{
        //     setcountryloading(true);
        //     const data = await axios.get('http://localhost:3004/api/country');
        //     console.log("country >>>>", data.data.country);
        //     setcountrydata(data.data.country);
        //     setcountryloading(false);
        // };

        fetchdata();
        destdata();
        internationaldata();
       // countrydata();
    }, []);

    return <AppContext.Provider value={{packdata,loading,destdata,destloading,countrydata,countryloading,intpackloading,intpackdata}}>{children}</AppContext.Provider>
}
 


// export default { AppContext, AppProvider}