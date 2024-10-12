import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser, { isLoading: logoutLoading }] = useLogoutMutation();

  const logOutHandler = async () => {
    try {
      await logoutUser();
      toast.success("Come back soon!");
      navigate("/");
      dispatch(logout());
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        className="poppins-regular mx-0 navBarFont"
        bg="light"
        style={{ backgroundColor: "#fff" }} // Add this to set the navbar background color
      >
        <Container fluid className="navBarFont poppins-bold">
          <Navbar.Brand
            href="#home"
            className="poppins-bold"
            style={{ color: "#ff6700" }} // Add this to set the navbar brand font color
          >
            GoRent
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto bg-myColor">
              <Nav.Link href="#features" style={{ color: "#ff6700" }}>
                Dashboard
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#ff6700" }}>
                Bookings
              </Nav.Link>
              <NavDropdown
                title={`${userInfo?.fullName}`}
                id="collapsible-nav-dropdown"
                className="poppins-semibold"
                style={{ color: "#ff6700" }} // Add this to set the NavDropdown title font color
              >
                <NavDropdown.Item
                  href="#action/3.2"
                  style={{ color: "#ff6700" }}
                  className="poppins-semibold"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  style={{ color: "#ff6700" }}
                  className="poppins-semibold"
                  onClick={logOutHandler}
                >
                  {logoutLoading ? <Loader /> : "Logout"}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
