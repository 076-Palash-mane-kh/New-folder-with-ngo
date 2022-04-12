import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Link } from "react-bootstrap";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiDonateHeart } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

function NavbarHome() {
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
            <Nav.Link href="/AboutUs">
              <HiOutlineMail size="2em" />
              About Us
            </Nav.Link>
            <Nav.Link href="/DonateUs">
              <BiDonateHeart size="2em" />
              Donate
            </Nav.Link>
            <Nav.Link href="/ContactUs">
              <HiOutlinePhone size="2em" />
              Contact Us
            </Nav.Link>
            <Nav.Link href="/SignInForm">
              <CgProfile size="2em" title="LogIn" />
              Sign In
            </Nav.Link>
            {/* <Nav.Link href="/Login" class="btn btn-primary">Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
