import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MedicineList() {
  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get("http://localhost:8083/medicines").then((resp) => {
      console.log(resp.data);
      setData(resp.data);
      console.log(data);
    });
  }, []);

  function handleActive(userId, status){
    // console.log("In verification activity")
    // console.log(status)
    // if(status == true){
    //   axios.put("http://localhost:8083/suspend/"+userId)
    // }
    // else{
    //   axios.put("http://localhost:8083/activate/"+userId)
    // }

    window.location.reload();


  }

  const claimActivity = ()=>{

  }
  return (
    <>
      <div className="container mt-5">
        <h5 className="p-2">Donar List</h5>
        <table className="table table-bordered">
          <thead>
            <th>Batch ID</th>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>City</th>
            <th>State</th>
            <th>Status</th>
            <th>Verify</th>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.user_ID}>
                <td>{x.batch_no}</td>
                <td>{x.medicine_name}</td>
                <td>{x.quantity}</td>
                <td>{x.expiry_date}</td>
                <td>{x.city}</td>
                <td>{x.state}</td>
                {/* <td> <button className="btn btn-primary" onClick={ ()=>{handleActive(x.user_ID, x.is_Active)} }> {x.is_Active?'Claimed':'Not Claimed'}</button> </td> */}
                <td> <button className="btn btn-primary" onClick={ ()=>{handleActive(x.user_ID, x.is_verified)} }> {x.is_verified?'Verified':'Decline'}</button> </td>
                <td> <button className="btn btn-danger" onClick={ ()=>{claimActivity(x.user_ID, x.is_Claimed)} }> {x.is_Claimed?'Available':'Claimed'}</button> </td>
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
