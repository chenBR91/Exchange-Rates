import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
//const { PORT, EXHANGERATE_KEY, TWELVE_KEY } = process.env;

app.get('/', (req, res) => {
    console.log("test");
    res.send("Hello world");
})


// app.get('/rates', async (req, res) => {
//     try {
//         console.log('rates');
//         const currencyEur = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${EXHANGERATE_KEY}&symbols=USD,GBP,JPY,ILS`)
//         const eur = await currencyEur.json();
//         console.log(eur);
//         res.json({
//             'base': 'EUR',
//             'date': eur['date'],
//             'time': new Date(eur['timestamp'] * 1000).toUTCString(),
//             'ILS': eur['rates']['ILS']
//             });
//     }
//     catch (err) {
//         console.log("error ", err);
//     }
// })


// app.get('/forex', async (req, res) => {
//     console.log(TWELVE_KEY);
//     const url = `https://api.twelvedata.com/quote?symbol=EUR/USD&apikey=fa12b8c19c504b17a658df4a954ae044`;
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         res.json(data);
//     }
//     catch(err) {
//         console.log("Error fetching forex data:");
//     }
// })


app.listen(3000, () => {
    console.log("server is running at port numbe 3000");
})