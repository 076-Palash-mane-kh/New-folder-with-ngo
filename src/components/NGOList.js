import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NGOList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    
    axios.get("http://localhost:8083/fetch-all-ngo").then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    });
  }, []);

  function handleActive(userId, status){
    console.log("In Handle Active")
    console.log(status)
    if(status == true){
      axios.put("http://localhost:8083/suspend/"+userId)
    }
    else{
      axios.put("http://localhost:8083/activate/"+userId)
    }

    window.location.reload();


  }
  return (
    <>
      <div className="container mt-5">
        <h5 className="p-2">NGO List</h5>
        <table className="table table-bordered">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Status</th>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.user_ID}>
                <td>{x.user_ID}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.mobileNo}</td>
                <td>{x.address}</td>
                <td>{x.city}</td>
                <td>{x.state}</td>
                <td> <button className="btn btn-primary" onClick={ ()=>{handleActive(x.user_ID, x.is_Active)} }> {x.is_Active?'Active':'Inactive'}</button> </td>
                {/*
            {/* <td>
                        <Link to={'/odetails/'+x.id} className="btn btn-primary btn-sm">Details</Link>
                    </td> */}
              </tr>
            ))}
            {/* {data?.map((value, index) => (
              <div key={index}>{value.name}</div>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
