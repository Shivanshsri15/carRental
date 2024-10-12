import express from "express";
import { getCarById, getCars } from "../controllers/carController.js";

const router = express.Router();

router.route("/").get(getCars);
router.route("/:id").get(getCarById);

export default router;
