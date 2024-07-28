import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import {dbconnection} from './database/dbConnection.js'
import { errorMiddleware } from "./middleware/error.js";
import {reservationRouter } from './routes/reservation.route.js'



const app = express();
dotenv.config({path: './configenv/config.env'})

app.use(cors({
    origin: [process.env.FRONTEND_URL],  //path to frontend 
    methods: ["POST"],
    credentials: true,  //
}));

app.use(express.json()) //convert string to json formatt 
app.use(express.urlencoded({
    extended: true
})); //which type of data we have 


app.use('/api/v1/resevarion', reservationRouter)


dbconnection()
app.use(errorMiddleware)



export {app}