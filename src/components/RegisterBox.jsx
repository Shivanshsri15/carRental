import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";

const RegisterBox = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword === password) {
        const res = await register({ fullName, email, password }).unwrap();
        navigate("/home");
        dispatch(setCredentials({ ...res }));
      } else {
        toast.error("Please recheck your Reentered password");
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <Container
      fluid
      className="w-75 bg-white shadow-lg mb-5 py-2 rounded px-4 mt-5 poppins-regular"
    >
      <h4>Register</h4>
      <Form className="mt-3" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>
            <strong> Full Name:</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={fullName}
            placeholder="Enter Your Fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong> Email:</strong>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong> Password:</strong>
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Set Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Confirm Password:</strong>
          </Form.Label>

          <Form.Control
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Re-Enter Your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="outline-primary" className="mt-2" type="submit">
          Register
        </Button>
        {registerLoading ? <Loader /> : ""}
      </Form>
    </Container>
  );
};

export default RegisterBox;
