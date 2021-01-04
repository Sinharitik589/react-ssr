import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const makeRequest = async  () => {
        const respone_with_proxy = await axios.get("/api/current_user");
        
        const response_without_proxy = await axios.get("http://react-ssr-api.herokuapp.com/current_user");
        
        console.log({ respone_with_proxy, response_without_proxy });
        //the main takeaway from this is that the server makes away request 
        //in behalf of the browser 
        //when the followup requests are being made from the client side 
        //there is a proxy setup so that all the requests whether its be initial or
        //followup it should be from the same address as cookies are address specific 
        //and hence for all followup request all cookies related stuffs are sent alongwith the request
        //proxy server just redirects these requests 
    }
    return (
        <div>Home component
            <button onClick={makeRequest}>Click me</button>
            <Link to="/users">User</Link>
        </div>
        
    )
};



export default  {
    component:HomePage
};