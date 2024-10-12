import React from "react";
import { useGetCarQuery } from "../slices/carApiSlice";
import NavBar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import CarCard from "../components/CarCard";
import Loader from "../components/Loader";

const CarScreen = () => {
  const { data: carsData, isLoading } = useGetCarQuery();

  return (
    <>
      <NavBar />
      <Container fluid>
        {isLoading ? (
          <Loader />
        ) : (
          <Row className="py-4">
            {carsData?.map((car) => (
              <Col key={car.id} md={3} className="pt-5">
                <CarCard car={car} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default CarScreen;
