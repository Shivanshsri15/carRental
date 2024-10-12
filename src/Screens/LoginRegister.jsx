import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import LoginBox from "../components/LoginBox";
import RegisterBox from "../components/RegisterBox";
import { FaFire } from "react-icons/fa";
import car from "../images/car.jpg";
import { FaCar } from "react-icons/fa";

const LoginRegister = () => {
  // const { userInfo } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   {
  //     userInfo ? navigate("/home") : navigate("/");
  //   }
  // }, []);
  const [registerMode, setRegisterMode] = useState(false);
  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col md={6} className="m-0 p-0">
          <Image src={car} className="img-fluid" />
        </Col>

        <Col md={6} className="bg-light ">
          <h2 className="poppins-semibold text-center mt-4">
            Welcome to GoRent
          </h2>
          <p className="text-center">
            <FaFire className="fs-3" />
          </p>
          {registerMode ? <RegisterBox /> : <LoginBox />}
          <h5 className="poppins-regular ps-5 ms-5">
            {registerMode ? "Already a User..?" : "New to the platform..!?"}

            <strong
              onClick={() => setRegisterMode((prev) => !prev)}
              className="textHover"
            >
              {registerMode ? "Login" : "Register"}
            </strong>
          </h5>
          <p className="text-center mt-5">
            <FaCar className="fs-3" />
          </p>
          <h5 className="poppins-bold px-5 mt-5">Why Choose Us?</h5>
          <p className="poppins-semibold-italic mt-3 px-5">
            <p>
              Extensive Fleet: Choose from our diverse selection of vehicles
              that cater to every need and budget.
            </p>
            <p>
              Affordable Rates: Enjoy competitive pricing without compromising
              on quality or service.
            </p>
            <p>
              Flexible Rentals: Whether you need a car for a day, a week, or a
              month, we offer flexible rental periods to suit your schedule.
            </p>
            <p>
              Convenient Locations: With multiple rental locations across the
              city, picking up and dropping off your rental car is a breeze.
            </p>
            <p>
              Customer Support: Our friendly and professional team is available
              24/7 to assist you with any inquiries or issues.
            </p>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default LoginRegister;
