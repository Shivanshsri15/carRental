import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useLoginMutation } from "../slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";
const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading: loginLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/home");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <Container
      fluid
      className="w-75 bg-white shadow-lg mb-5 py-2 mt-5 rounded px-4 poppins-regular"
    >
      <h4>Login</h4>
      <Form className="mt-3" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>
            <strong> Email: </strong>
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
            <strong> Password: </strong>
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="outline-primary" className="mt-1" type="submit">
          Login
        </Button>
        {loginLoading ? <Loader /> : ""}
      </Form>
    </Container>
  );
};

export default LoginBox;
