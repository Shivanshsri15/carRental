import asyncHandler from "../middleware/asyncHandler.js";
import Car from "../models/carModel.js";

const getCars = asyncHandler(async (req, res) => {
  const car = await Car.find({}).populate("user", "-password");
  res.status(200).json(car);
});

const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id).populate("user", "-password");
  if (!car) {
    res.status(404).json({ message: "Car not found" });
  } else {
    res.status(200).json(car);
  }
});

export { getCars, getCarById };
