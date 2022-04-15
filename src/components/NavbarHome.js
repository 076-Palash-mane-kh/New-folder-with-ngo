import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Link } from "react-bootstrap";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiDonateHeart } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoListCircleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


function NavbarHome() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = (e) => {
    dispatch({type:'Logout'})
    sessionStorage.clear();
    navigate("/");
  }

  const nstate = useSelector((nstate)=>nstate);
  const isadmin = nstate.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="admin" ? true:false;
  const isdonar = nstate.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="donor" ? true:false;
  const isngo = nstate.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="NGO" ? true:false;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">MediRelief</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/Home">
              <RiHome2Line size="2em" />
              Home
            </Nav.Link>

            
            {isdonar?(
              <>
            <Nav.Link href="/DonateUs">
              <BiDonateHeart size="2em" />
              Donate
            </Nav.Link>
            <Nav.Link href="#about">
              <HiOutlineMail size="2em" />
              About Us
            </Nav.Link>
            <Nav.Link href="#footer">
              <HiOutlinePhone size="2em" />
              Contact Us
                
            </Nav.Link>
              </>
              ):""}

            {isngo? (
            <>
            <Nav.Link href="#about">
              <HiOutlineMail size="2em" />
              About Us
            </Nav.Link>
            <Nav.Link href="#footer">
              <HiOutlinePhone size="2em" />
              Contact Us
                
            </Nav.Link>

             <Nav.Link href="/NgoHome">
              <RiMedicineBottleLine size="2em" />
              Claim Medicines
            </Nav.Link>
              
            </>
            ):""}
            {/* <Nav.Link href="/Login" class="btn btn-primary">Login</Nav.Link> */}
          {isadmin?(
            <>
          <Nav.Link href="/NGOList">
               <IoListCircleOutline size="2em" /> 
              NGO's
            </Nav.Link>
            <Nav.Link href="/DonorList">
            <IoListCircleOutline size="2em" />          
                Donor's
            </Nav.Link>
            <Nav.Link href="/MedicineList">
             <IoListCircleOutline size="2em" />
              Medicine's
            </Nav.Link>
            <Nav.Link href="/ClaimHistoryAdmin">
               <IoDocumentTextOutline size="2em" /> 
              ClaimHistory
            </Nav.Link>
            </>
            ):""}
            {!nstate.loggedin.IsLoggedIn ?(
            <>
            <Nav.Link href="/SignInForm">
              <CgProfile size="2em" title="LogIn" />
              Sign In
            </Nav.Link>
            </>
            ):(
              <>
            <Nav.Link>
              <CgProfile size="2em" />
              Hi {nstate.loggedin.Username}
            </Nav.Link>
            <Nav.Link >
              <Button onClick={logout} variant="danger">
              <CgProfile size="2em" title="Logout" />
              Logout
              </Button>
            </Nav.Link>
            </>
            )}
            </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
