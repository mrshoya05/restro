import express from "express"
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

router.post("/send", sendReservation);

export { router as reservationRouter }; // Use a named export
