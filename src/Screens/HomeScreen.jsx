import React from "react";
import Navbar from "../components/Navbar";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import car from "../assets/carHome.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col className="w-50 poppins-regular ps-5 pt-5">
            <div className="ms-5">
              <p
                className="m-0 poppins-semibold  navBarFont"
                style={{ fontSize: "3rem" }}
              >
                Book a Car you need and
              </p>
              <p className="m-0 poppins-semibold" style={{ fontSize: "3rem" }}>
                Drive in{" "}
              </p>
              <p
                className="poppins-bold  navBarFont mb-3"
                style={{ fontSize: "4rem" }}
              >
                Minutes...
              </p>
            </div>
            <div className="mb-5">
              <LinkContainer to={"/cars"}>
                <Button variant="success" className="text-white ms-5 px-4">
                  Book a car
                </Button>
              </LinkContainer>
              <Button variant="warning" className="text-white ms-2 px-4">
                Contact Us
              </Button>
            </div>
            <p className="poppins-semibold w-75 text-start ps-5 pt-4 mb-5">
              Explore new destinations with our wide range of vehicles at
              unbeatable prices. Book now and get ready to hit the open road!
            </p>
            <div
              className="d-flex justify-content-between w-25 fs-3 ps-5 text-Hover
            "
            >
              <FaFacebook />
              <FaGoogle />
              <FaInstagram />
              <FaTwitter />
            </div>
          </Col>
          <Col className="ps-5">
            <div className="ms-5">
              <Image
                src={car}
                rounded
                style={{ height: "30rem", width: "30rem" }}
                className="ms-5 mt-5 ps-5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
