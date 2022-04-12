import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import axios from "axios";

export default function Otp() {
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let otpObj = {otp}
    console.log(otp);
    // let signupInfo = JSON.parse(localStorage.getItem("signupInfo") );
    // console.log(signupInfo);
 
  //   if (signupInfo.otp == otp) {
  //     await  axios.post("http://localhost:8080/insert", signupInfo);
  //     navigate("/login");
  //     swal("Success","Registration successful","success")
  // }
  //   else swal("Error","invalid otp","error");
  //   setOtp("");
  
  };

  // let navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center col-6 col-md-4">
        <div className="">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="text-info  w-100 text-center">
              Check email for otp
            </div>
            <label
              htmlFor="otp"
              className="mb-2  fs-5 text-center form-control-md w-100"
            >
              Enter OTP
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="otp"
              id="otp"
              value={otp}
               onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn btn-dark w-100 mb-2">Submit</button>
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
