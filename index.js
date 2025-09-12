import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
const { PORT, EXHANGERATE_KEY } = process.env;

app.get('/rates', async (req, res) => {
    try {
        const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${EXHANGERATE_KEY}`)
        const data = await response.json();
        console.log(data);
        res.json({
            'base': 'EUR',
            'ILS': data['rates']['ILS']
            });
    }
    catch (err) {
        console.log("error ", err);
    }
    
})


app.listen(PORT, () => {
    console.log("server is running at port number 3000");
})