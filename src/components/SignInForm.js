import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/SignIn.css";
import Otp from "./Otp";
import Vpicupload from "./Vpicupload";
import { useDispatch } from "react-redux";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const id = event.target.id;
    if (id === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log("in login method ");
    console.log(email);
    let userdata = {};

    await axios
      .get("http://localhost:8083/get-user-by-email/" + email)
      .then((response) => {
        userdata = response.data;
        if (response.data == null) {
          console.log("data is null");
        }
        sessionStorage.setItem("email",userdata.email)
        sessionStorage.setItem("name",userdata.name)
        sessionStorage.setItem("role",userdata.role)
        sessionStorage.setItem("city",userdata.city)
        sessionStorage.setItem("state",userdata.state)
        dispatch({type: 'IsLoggedIn'})
        navigate('/')
      });
    console.log(userdata.role);

    // if (
    //   userdata.email == email &&
    //   userdata.password === password &&
    //   userdata.role == "admin"
    // ) {
    //   navigate("/AdminHome");
    // } else if (
    //   userdata.email == email &&
    //   userdata.password === password &&
    //   userdata.role == "ngo"
    // ) {
    //   navigate("/NgoHome");
    // } else if (
    //   userdata.email == email &&
    //   userdata.password === password &&
    //   userdata.role == "donor"
    // ) {
    //   navigate("/UserHome");
    // } else {
    //   console.log("user not valid");
    // }

    // await axios
    //   .post("http://localhost:8083/login", userdata)
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    //console.log(this.state);

    // console.log(password);
  };

  const login = async () => {};
  return (
    <div className="container">
      <div className="row ">
       
      <div className="col-6 text-center ">
        <div className="container py-5 my-5">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <button className="formFieldButton">Sign In</button>{" "}
              </div>
              <div className="formField">
                {/* <button className="formFieldButton">Create an account</button>{" "} */}
                <div>
                  <span className="p-3">
                  <Link to="/Register" className="formFieldLink">
                    Create an account
                  </Link>
                  </span>
                {/* </div>
                <div> */}
                  {/* <button className="formFieldButton"> Forgot Password</button>{" "} */}
                  {/* </div>
              <div className="formField"> */}
                  {/* <button className="formFieldButton">Sign In</button>{" "} */}
                  <span className="p-3">
                  <Link
                    to="/ForgotPassword"
                    className="formFieldLink"
                    // style={{ position: relative }}
                  >
                    Forgot Password
                  </Link>
                  </span>
                </div>
              </div>
            </form>
           </div>
          </div>
        </div>      
        <div className="col-6">
          <img
            src="https://people.utoronto.ca/wp-content/uploads/illustrations/undraw_collab_8oes.svg"
            width={500}
            height={550}
          ></img>
        </div>
      </div>{" "}
      {/* <div className="appAside" style={{ width: "50%" }}></div>
       */}
    </div>
  );
}

export default SignInForm;
