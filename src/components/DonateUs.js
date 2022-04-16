import React, { useState, useEffect } from "react";
// import Spline from '@splinetool/react-spline';
import axios from "axios";
import "../CSS/SignIn.css";
import swal from "sweetalert";


function DonateUs() {


  useEffect(() => {
    document.title = "DonateUS";
  }, []);

let[medname, setMedname] = useState("");
let [expirydate, setExpirydate] = useState("");
let [quantity, setQuantity] = useState("")
// let [hasAgreed, setHasAgreed] = useState("");


let mednameinp = (e) => setMedname(e.target.value);
let expirydateinp=(e) => setExpirydate(e.target.value);
let quantityinp =(e) => {setQuantity(e.target.value);
  console.log(e.target.value);
}


const handleSubmit = async (event) => {
  event.preventDefault();

  let donatedata = {
    medicine_name: medname,
    expiry_date: expirydate,
    quantity: parseInt(quantity)
  };
  localStorage.setItem("donatedata", JSON.stringify(donatedata));
  if (donatedata.medname === "") {
    swal("error", "please enter valid details", "error");
  }
  else if(donatedata.quantity === "") {
    swal("error", "please enter valid Quantity", "error");
  } 
  else{ 
  console.log("donate data "+donatedata.quantity);

  let donate = await axios.post("http://localhost:8083/medicine-detail",donatedata).then
  (
    swal("sucess", "Thank you for your Donation", "success"))
    //console.log(donate.quantity);
  }
}

  return (
  <div className="container justify-content-center p-5"  style ={{width:"100%"}}>
    <div className="row">
      <div className="col-6">
       
        </div>  
         

        <div>
      </div>
      <div className="col-6">

        <div className="formCenter">
          <form>
           <div className="py-3">
            <label className="formFieldLable"  htmlFor="medname">
             
                 <input
                type="text"
                // name="medname"
                id="medname"
                className="formFieldInput"
                placeholder="Medicine Name"
                value={medname}
                onChange={mednameinp}

              
                />
             </label>
           </div>
        <div className="py-3">
          <label className="formFieldLabel" htmlFor="expdate">
          Expiry Date:
          <input 
          type="date"
          id="expirydate"
          className="formFieldInput"
          placeholder="Expiry Date"
          name="expirydate"
          value={expirydate}
          onChange={expirydateinp}
          />
          </label>
        </div>
        <div  className="py-3">
          <label className="formFieldLabel" htmlFor="quantity">
           Quantity:
           <input
           type="number" 
           name="quantity"
           placeholder="Please Specify the Quantity of Medicines"
           id="quantity"
           required

           onChange={quantityinp}
           />
          </label>
        </div>


        <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
              />{" "}
             I hereby declare that all the information provided by me is true to the best of my knowledge <br/>and I will be solely responsible for any discrepancies found. {" "}
            </label>
          </div>
      </form>
      <div  className="py-3 justify-content-center p-5">
            <button type="submit" value="Submit" onClick={handleSubmit} >Donate</button>
        </div>
      </div>
      </div>  
    </div>
  </div>
  );
}

export default DonateUs;
