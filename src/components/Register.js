import React, { useState } from "react";
import axios from "axios";
import "../CSS/SignIn.css";
import "../CSS/SignUp.css"




// import "../components/3.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

export default function Register() {
  return (
    <div>
      <Registerdetails />
    </div>
  );
}

function Registerdetails() {
  const navigate=useNavigate()
  const [name, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [contactNo, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [upiID, setupiID] = useState("");
  const [address,setAddress]=useState("");
  const [city, setCity] = useState("");
  const [state ,setState] = useState("");
  const [role, setRole] = useState("");
  

  const takefullname = (e) => {
    setfullname(e.target.value);
  };

  const takeemail = (e) => {
    setemail(e.target.value);
  };


  const takephonenumber = (e) => {
    setphonenumber(e.target.value);
  };

  const takesetpassword = (e) => {
    setpassword(e.target.value);
  };

  const takeupiID=(e)=>{
    setupiID(e.target.value)
  }
  
  const takeaddress = (e) => {
    setAddress(e.target.value);
  };
  
  const takecity = (e) => {
    setCity(e.target.value);
  };
  
  const takeState = (e) => {
    setState(e.target.value);
  };
  
  const takerole = (e) => {
    setRole(e.target.value);
  };
  var letters = /^[A-Za-z ]+$/;
  const regex =
    /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const handleForm = (e) => {
    e.preventDefault();    
    if (name == "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (!letters.test(name)) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Name",
      });
    } else if (name.length < 2 || name.length > 15) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name should be min 2 and max length is 15 letters",
      });
    } else if (email === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (!regex.test(email)) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Email Address",
      });
    } else if (contactNo === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter Contact Number",
      });
    }  else if (password === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter password",
      });
    } else if (password.length < 6 || password.length > 15) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password length is min 6 and max length is 15",
      });
    }else if ( upiID=== "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter password",
      });
    }
    else {
      submit();
    }
  };

  let fd = {
    name: name,
    password: password,
    email: email,
    mobileNo: contactNo,
    address: address,
    city: city,
    state: state,
    // securityQues: securityQues,
    // securityAns: securityAns,
    role: role,
    // Government_Id_img:vpic
    uid:upiID
  };
  const submit = async () => {
  //   const fd=new FormData()
  //   fd.append("name",name)
  //   fd.append("userid",email)
  //   // fd.append("gender",gender)
  //   fd.append("phone",contactNo)
  //   fd.append("password",password)
  //   fd.append("uid",upiID)      
  //   fd.append("address",address)
	// fd.append("city",city)
	// fd.append("state",state)

  console.log(fd);

    const url = `http://localhost:8083/register`;
    await axios.post(url, fd)
    .then(response=>{
      swal.fire({
            position: "center",
            icon: "success",
            title: "Registered Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
      navigate("/login")
    })
    .catch(error=>{
      swal.fire({
            position: "center",
            icon: "error",
            title: error.response.data,
            showConfirmButton: false,
            timer: 1500,
          });
    });
  };

  return (
    <div className="container mt-5">
      <div className="title">User Registration Form</div>
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              id="firstName"
              value={name}
              onChange={takefullname}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input
              type="text"
              placeholder="Enter your email"
              id="emailid"
              value={address}
              onChange={takeaddress}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">City</span>
            <input
              type="text"
              placeholder="Enter your city"
              id="city"
              value={city}
              onChange={takecity}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Mobile Number</span>
            <input
              type="text"
              maxLength={10}
              minLength={10}
              placeholder="Enter your number"
              id="mobileNo"
              value={contactNo}
              onChange={takephonenumber}
              required
            />
          </div>
          
          
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              id="emailid"
              value={email}
              onChange={takeemail}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={takesetpassword}
              required
            />
          </div>
          <div className="input-box">
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
              onChange={takeState}
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
          <div className="input-box">
            {/* <span className="details">Aadhar Number or Registration Number</span> */}
            <input
              type="text"
              placeholder="Enter your adhar number or Reistration ID"
              value={upiID}
              onChange={takeupiID}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="role" className="formFieldLabel"></label> */}
            <select
              id="role"
              name="role"
              placeholder="Choose a role"
              className="form-control form-control-md mb-2"
              value={role}
              onChange={takerole}
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="donor">Donor</option>
              <option value="NGO">NGO</option>
            </select>
          </div>

        </div>
        <div className="button">
          <input type="submit" value="Submit" onClick={handleForm} />
        </div>
        <div className="mb-0">
          Already have an account?
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}
