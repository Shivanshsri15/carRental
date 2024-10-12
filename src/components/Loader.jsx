import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" size="md" variant="dark" />
    </div>
  );
};

export default Loader;
