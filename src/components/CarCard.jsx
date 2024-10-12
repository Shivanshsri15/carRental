import React from "react";
import { Card, Container } from "react-bootstrap";
import { Tilt } from "react-tilt";
import { LinkContainer } from "react-router-bootstrap";
const CarCard = ({ car }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      <LinkContainer to={`/car/${car._id}`}>
        <Container>
          <Tilt options={defaultOptions} className="">
            <Card className="mx-2 card shadow-lg m-2 text-Hover">
              <Card.Img variant="top" src={car.image} />
              <Card.Body className="card-body">
                <Card.Title className="poppins-semibold">
                  {car.brand}-{car.model} ({car.year})
                </Card.Title>
                <Card.Text className="poppins-regular">
                  {car.description}
                </Card.Text>
                <Card.Footer>{car.location}</Card.Footer>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </LinkContainer>
    </>
  );
};

export default CarCard;
