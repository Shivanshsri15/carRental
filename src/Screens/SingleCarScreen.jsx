import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../slices/carApiSlice";
import Loader from "../components/Loader";
import "react-datepicker/dist/react-datepicker.css";
import { FaCar } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const SingleCarScreen = () => {
  const { id } = useParams();
  const { data: carData, isLoading: carDataLoading } = useGetCarByIdQuery(id);
  const [bookingOpen, setBookingOpen] = useState(false);

  // const handleDateChange = (e) => {
  //   e.preventDefault();
  //   setDataSelected(e.target.value);
  // };
  return (
    <>
      <NavBar />
      <LinkContainer to={`/cars`}>
        <Button
          variant="outline-secondary"
          className="mx-2 mb-2
        "
        >
          Go back
        </Button>
      </LinkContainer>
      <Container>
        {carDataLoading ? (
          <Loader />
        ) : (
          <Row>
            <Col>
              <Image
                src={carData?.image}
                rounded
                className=""
                style={{ width: "38rem" }}
              />
            </Col>
            <Col className="pt-4">
              <h1 className="poppins-bold">
                {carData?.brand}
                {carData?.model}
                <span className="poppins-regular mx-3">({carData?.year})</span>
              </h1>
              <hr />
              <h3 className="poppins-semibold">Description:</h3>
              <h5 className="poppins-regular">{carData?.description}</h5>
              <hr />
              <Row>
                <Col>
                  <h3 className="poppins-semibold">About Owner:</h3>
                  <h4 className="poppins-regular my-3">
                    {carData?.user.fullName}
                  </h4>
                  <p className="poppins-regular">({carData?.user.email})</p>
                </Col>
                <Col>
                  {/* <Datepicker
                    selected={dateSelected}
                    onChange={(date) => setDataSelected(date)}
                  /> */}
                  <h3 className="poppins-semibold">Location:</h3>
                  <h4 className="poppins-regular">{carData?.location}</h4>
                  <h3 className="poppins-semibold">Price:</h3>
                  <h4 className="poppins-regular">${carData?.price}/day</h4>
                </Col>
              </Row>
              {bookingOpen ? (
                <Row>
                  <Row>
                    <Col className="text-end">
                      <hr />
                      <Button
                        variant="outline-danger"
                        onClick={() => setBookingOpen(false)}
                      >
                        <ImCross />
                      </Button>
                    </Col>
                  </Row>
                </Row>
              ) : (
                <Button
                  variant="outline-success "
                  className="poppins-semibold w-50 text-center my-3"
                  onClick={() => setBookingOpen(true)}
                >
                  Schedule a Booking
                  <FaFire className="fs-5 ms-2 " />
                </Button>
              )}
            </Col>
          </Row>
        )}
      </Container>
      <Container>
        <Row className="py-5">
          <FaCar className="fs-1" />
        </Row>
      </Container>
    </>
  );
};

export default SingleCarScreen;
