import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
// import UserHome from "./components/UserHome";
import Footer from "./components/Footer";
// import AdminHome from "./components/AdminHome";
import DonateUs from "./components/DonateUs";
import NavbarHome from "./components/NavbarHome";
import Otp from "./components/Otp";
import ForgotPassword from "./components/ForgotPassword";
import Vpicupload from "./components/Vpicupload";
import NgoHome from "./components/NgoHome";
import Chat from "./components/Chat"
import "./CSS/SignIn.css";
import Register from "./components/Register";
import ClaimHistory from "./components/ClaimHistory";
import ClaimHistoryAdmin from "./components/ClaimHistoryAdmin";
import NgoDetails from "./components/NgoDetails";
import NGOList from "./components/NGOList";
import DonorList from "./components/DonorList";
import MedicineList from "./components/MedicineList";


function App() {
  return (
       <div>
         <NavbarHome />
       <Routes>
        
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
        {/* <Route path="/ClaimHistoryAdmin" element={<ClaimHistoryAdmin />} /> */}
        <Route path="/MedicineList" element={<MedicineList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ClaimHistory" element={<ClaimHistory />} />
        <Route path="/ClaimHistoryAdmin" element={<ClaimHistoryAdmin />} />
        <Route path="/SignInForm" element={<SignInForm />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/NGOList" element={<NGOList />} />
        <Route path="/DonorList" element={<DonorList />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/NGOList" element={<NGOList />} />
        {/* <Route path="/Footer" element={<Footer />} /> */}
        {/* <Route path="/AdminHome" element={<AdminHome />} /> */}
        <Route path="/DonateUs" element={<DonateUs />} />
        <Route exact path="/NavbarHome" element={<NavbarHome />} />
        <Route exact path="/Vpicupload" element={<Vpicupload />} />
        <Route exact path="/NgoHome" element={<NgoHome />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer></Footer>
      <Chat></Chat>
       </div>
  );
}

export default App;
