import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./Routes/userRoutes.js";
import carRoutes from "./Routes/carRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";

dotenv.config();
const port = process.env.PORT || 2000;

connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/order", orderRoutes);

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
