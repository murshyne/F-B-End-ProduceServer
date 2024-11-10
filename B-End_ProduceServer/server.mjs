// imports
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import produceRoutes from './routes/produceRoutes.mjs'
import cors from 'cors';
import morgan from "morgan";



// SetUps
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;

//Connect to DB
connectDB()

// middleware
app.use (cors()) //resources sharing middleware
app.use (morgan()) //logger middle ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.use('/api/produce', produceRoutes)

// listener
app.listen (PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
