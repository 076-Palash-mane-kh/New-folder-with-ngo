import React, { useState } from "react";
// import Spline from '@splinetool/react-spline';

import "../CSS/SignIn.css";


function DonateUs() {

let[medname, setMedname] = useState("");
let [expirydate, setExpirydate] = useState("");


let mednameinp = (e) => setMedname(e.target.value);
let expirydateinp=(e) => setExpirydate(e.target.value);



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
           name="expirydate"
           placeholder="Please Specify the Quantity of Medicines"
           id="expirydate"
           value={expirydate}
           onChange={expirydateinp}
           />
          </label>
        </div>
        {/* <div  className="py-3">
            <label className="formFieldLabel" htmlFor="medpic">
              Please upload photo with expiry date:
              <input type="file" name="fileupload" />
            </label>
        </div> */}
        <div  className="py-3 justify-content-center p-5">
            <input type="submit" value="Submit" />
        </div>
      </form>
      </div>
              </div>  
    </div>
  </div>
  );
}

export default DonateUs;
