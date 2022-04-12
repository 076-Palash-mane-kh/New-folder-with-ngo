import axios from "axios";
// import swal from "sweetAlert2";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/SignIn.css";
import "../CSS/SignUp.css"
// import Vpicupload from './Vpicupload';
import Otp from './Otp';
import swal from "sweetalert";
// import swal from sweetAlert2;

function SignUpForm() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [securityQues, setSecurityQues] = useState("");
   let [vpic, setVpic] = useState("");
  let [role, setRole] = useState("");
  let [securityAns, setSecurityAns] = useState("");
 // const [pic4, setpic4] = useState("");


  let nameinp = (e) => setName(e.target.value);
  let passwordinp = (e) => setPassword(e.target.value);
  let emailinp = (e) => setEmail(e.target.value);
  let phoneinp = (e) => setPhone(e.target.value);
  let addressinp = (e) => setAddress(e.target.value);
  let cityinp = (e) => setCity(e.target.value);
  let stateinp = (e) => setState(e.target.value);
   let vpicinp =(e) => {setVpic(e.target.files[0]);}
  let roleinp = (e) => setRole(e.target.value);
  let securityquesinp = (e) => setSecurityQues(e.target.value);
  let securityansinp = (e) => setSecurityAns(e.target.value);

  let navigate = useNavigate();
  // const Otp = () => {
  //   navigate("/Otp");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let fd = new FormData();
    let userdata = {
      name: name,
      password: password,
      email: email,
      mobileNo: phone,
      address: address,
      city: city,
      state: state,
      securityQues: securityQues,
      securityAns: securityAns,
      role: role,
      // Government_Id_img:vpic
    };
    fd.append("name",name);
    fd.append("password",password);
    fd.append("email",email);
    fd.append("mobileNo",phone);
    fd.append("address",address);
    fd.append("city",city);
    fd.append("role",role);
    fd.append("Government_Id",vpic);

    localStorage.setItem("userdata", JSON.stringify(userdata));

    if (userdata.name === "") {
      swal("error", "please enter valid details", "error");
    } else if (userdata.password === "" ||
    userdata.password.search(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    ) < 0 ||
    userdata.password.length < 6) {
      swal("error", 
      "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      , "error");
    }  else if (userdata.email === ""||
    userdata.email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
    swal("error", "please enter your Email", "error");
    } else if (userdata.mobileNo === "" || userdata.mobileNo.search(/^[789][0-9]{9}$/) < 0){
      swal("error", "please enter your Mobile No.", "error");
    }else if (userdata.address === "") {
    swal("error", "please Enter your Address", "error");
    }else if (userdata.city === "") {
    swal("error", "please Enter your City", "error");
    }
    else if (userdata.state === "") {
    swal("error", "please choose your state", "error");
    }else {
     //navigate("/Vpicupload")
    let res = await axios.post("http://localhost:8083/register",fd)

    }
    // Otp();

    //   console.log("The form was submitted with the following data:");
    //  let res = await axios.post("http://localhost:8083/register",userdata)

    //  if(res.data!=null){
    //    alert("sucess")

    //   }
    //   else{
    //     alert("fail")
    //   }
  };

  return (
    <div
      className="container-fluid justify-content-center shadow my-5 text-dark"
      style={{ width: "500px"
      ,background: "rgba(230, 230, 250, 0.6) "
    }}
    >
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            {/* <label className="formFieldLabel text-black" htmlFor="name">
          Full Name
        </label> */}
            <input
              type="text"
              id="name"
              className="formFieldInput text-black"
              placeholder="Enter your full name"
              placeholderTextColor={'black'}
              name="name"
              value={name}
              onChange={nameinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="password">
          Password
        </label> */}
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={passwordinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="email">
          E-Mail Address
        </label> */}
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={emailinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="phone">
          Mobile No.
        </label> */}
            <input
              type="text"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your Mobile No."
              name="phone"
              value={phone}
              onChange={phoneinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="address">
          Address 
        </label> */}
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter your address"
              name="address"
              value={address}
              onChange={addressinp}
            />
          </div>

          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="city">
          E-Mail Address
        </label> */}
            <input
              type="text"
              id="city"
              className="formFieldInput"
              placeholder="Enter your city"
              name="city"
              value={city}
              onChange={cityinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="state">
          E-Mail Address
        </label> */}
            <select
              type="text"
              id="state"
              className="formFieldInput"
              placeholder="Enter your State"
              name="state"
              value={state}
              onChange={stateinp}
            >
             <option value="" disabled selected>
                Select your State
              </option>
              <option value="	Andaman and Nicobar (UT)">	Andaman and Nicobar (UT)</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="	Chandigarh (UT)">	Chandigarh (UT)</option>
              <option value="	Chhattisgarh">	Chhattisgarh</option>
              <option value="	Dadra and Nagar Haveli (UT)">	Dadra and Nagar Haveli (UT)</option>
              <option value="Daman and Diu (UT)">Daman and Diu (UT)</option>
              <option value="	Delhi">	Delhi</option>
              <option value="	Goa">	Goa</option>
              <option value="	Gujarat">	Gujarat</option>
              <option value="	Haryana">	Haryana</option>
              <option value="	Himachal Pradesh">	Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="	Jharkhand">	Jharkhand</option>
              <option value="	Karnataka">	Karnataka</option>
              <option value="	Kerala">	Kerala</option>
              <option value="	Lakshadweep (UT)">	Lakshadweep (UT)</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="	Mizoram">	Mizoram</option>
              <option value="	Nagaland">	Nagaland</option>
              <option value="	Orissa">	Orissa</option>
              <option value="	Puducherry (UT)">	Puducherry (UT)</option>
              <option value="	Punjab">	Punjab</option>
              <option value="	Rajasthan">	Rajasthan</option>
              <option value="	Sikkim">	Sikkim</option>
              <option value="	Tamil Nadu">	Tamil Nadu</option>
              <option value="	Telangana">	Telangana</option>
              <option value="	Tripura">NG	TripuraO</option>
              <option value="	Uttar Pradesh">	Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="	West Bengal">	West Bengal</option>
              {/* <option value="NGO">NGO</option>
              <option value="NGO">NGO</option> */}
            </select>
          </div>
          
          <div>
            {/* <label htmlFor="role" className="formFieldLabel"></label> */}
            <select
              id="role"
              name="role"
              placeholder="Choose a role"
              className="form-control form-control-md mb-2"
              value={role}
              onChange={roleinp}
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="donor">Donar</option>
              <option value="NGO">NGO</option>
            </select>
          </div>

          <div className="form-control form-control-md mb-2">
            {/* <span className="details">Photo </span> */}
            <div>
            <label htmlFor="role" className="formFieldLabel">Please Upload any Government ID</label>
            </div>
            <div>
            <input
              type="file"
              placeholder=""
              onChange={vpicinp}
              // value={vpic}
              required
            />
            </div>
          </div>

          {/* <div className="formField">
            <label htmlfor="securityQues" className="formFieldLabel">
              Security Question
            </label>
            <select
              id="securityQues"
              className="form-select"
              name="securityQues"
              onChange={securityquesinp}
              value={securityQues}
              required
            >
              <option value=""></option>
              <option value="Which was your first vehicle?">
                Which was your first vehicle?
              </option>
              <option value="Which is your favourite color?">
                Which is your favourite color?
              </option>
              <option value="Which was your first school?">
                Which was your first school?
              </option>
            </select>
            <div class="invalid-feedback fs-6 fw-bold">{esecurityQues}</div>
          </div> */}

          {/* <div className="col-md-6">
            <label htmlfor="securityAnswer" className="formFieldLabel">
              Your answer
            </label>
            <input
              type="text"
              className="form-control"
              id="securityAns"
              name="securityAns"
              placeholder="Remember this for forget password"
              onChange={securityansinp}
              // onFocus={clearErrors}
              value={securityAns}
              required
            />
            <div class="invalid-feedback fs-6 fw-bold">{esecurityAns}</div>
          </div> */}

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                // value={hasAgreed}
                // onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button type="submit" className="formFieldButton">Sign Up</button>{" "}
            <Link to="/signInForm" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
