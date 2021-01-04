import axios from 'axios'
import React from 'react'


const Admin = () => {

    const makeRequest = async  () => {
        const res = await axios.get("http://react-ssr-api.herokuapp.com/current_user");
        console.log(res.data);
    }

    return (
        <div>
                  <h1>Admin</h1>
        <button onClick={makeRequest}>Click me</button>
  </div>
    )

}


export default {
    component:Admin
}