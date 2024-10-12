import dotenv from "dotenv";
import connectDb from "./config/db.js";
import Car from "./models/carModel.js";
import carData from "./data/carData.js";
import colors from "colors";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Car.deleteMany();

    const sampleCars = carData.map((car) => {
      return { ...car, user: "6675bfe6ed5189b7c605687d" };
    });
    await Car.insertMany(sampleCars);
    console.log("Data Imported!".green.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  console.log("data destroyed");
} else {
  importData();
}
