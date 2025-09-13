import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import {getAllForexController, getDetailForexController} from './controllers/ForexController.js'


dotenv.config();
const { PORT } = process.env;

const app = express();


// middleware for the server
app.use(cors());
app.use(express.json());


// Routes for users
app.get('/api/forex/all-forex', getAllForexController);
app.get("/api/forex/detail-forex/:currency", getDetailForexController)





app.listen(PORT, () => {
    console.log(`server is running at port numbe ${PORT}`);
})