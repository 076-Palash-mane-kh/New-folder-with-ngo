import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";


export default function ClaimHistoryAdmin() {
  const [data, setData] = useState([]);
  useEffect(() => {

  //   // if (sessionStorage.getItem("admin") != "admin") {
  //   //   window.location = "/";
  //   // }
  //   viewUsers();


  //   const viewUsers = () => {
  //     axios.get(`http://localhost:8083/getallusers`).then(
  //       (response) => {
  //         if (response.data.length == 0) {
  //           swal.fire({
  //             title: "Admin",
  //             text: "There are no users registered",
  //             icon: "error",
  //             button: "Ok",
  //           });
  //         }
  //         setData(response.data);
  //       },
  //       (error) => {
  //         console.log(error);
  //         swal.fire("Server is down");
  //       }
  //     );
  //   };
  
    axios.get("http://localhost:8083/claim").then((resp) => {
      console.log(resp.data);
      setData(resp.data);
      console.log(data);
    });
  }, []);

  // function handleActive(userId, status){
  //   console.log("In Handle Active")
  //   console.log(status)
  //   if(status == true){
  //     axios.put("http://localhost:8083/suspend/"+userId)
  //   }
  //   else{
  //     axios.put("http://localhost:8083/activate/"+userId)
  //   }

  //   window.location.reload();


  // }
  return (
    <>
      <div className="container mt-5">
        <h5 className="p-2">Claim List</h5>
        <table className="table table-bordered">
          <thead>
            <th>Batch ID</th>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>NGO Name</th>
            <th>Claim Date</th>

          </thead>
          <tbody>
            {data.map((x,index) => (
              <tr key={index}>
                <td>{x.medicine.batch_no}</td>
                <td>{x.medicine.medicine_name}</td>
                <td>{x.medicine.quantiy}</td>
                <td>{x.medicine.expiry_date}</td>
                <td>{x.user.name}</td>
                <td>{x.claim_date}</td>
              </tr>
            ))}
      
          </tbody>
        </table>
      </div>
    </>
  );
}
