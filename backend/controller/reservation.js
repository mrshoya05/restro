import errorHandler from "../middleware/error.js";
 import { Reservation } from "../modules/reservationSchema.js";

 const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return next(new errorHandler("Please Fill Full Reservation Form!", 400));
    }
  
    try {
      await Reservation.create({ firstName, lastName, email, date, time, phone });
      res.status(201).json({
        success: true,
        message: "Reservation Sent Successfully!",
      });
    } catch (error) {
      // Handle Mongoose validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new errorHandler(validationErrors.join(', '), 400));
      }
  
      // Handle other errors
      return next(error);
    }
  };

export { sendReservation};