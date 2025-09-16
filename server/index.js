import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import {getAllForexController, getDetailForexController} from './controllers/ForexController.js'
import {renderForex} from './services/ForexService.js'

dotenv.config();
const { PORT } = process.env;

const app = express();


// middleware for the server
app.use(cors());
app.use(express.json());


// Routes for users
app.get('/api/forex/all-forex', getAllForexController);
app.get("/api/forex/detail-forex/:currency", getDetailForexController)



setInterval( async () =>{
    const data = await renderForex('USD');
    console.log(data);
}, 15 * 60 * 1000)


app.listen(PORT, () => {
    console.log(`server is running at port numbe ${PORT}`);
})