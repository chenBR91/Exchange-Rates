import dotenv from "dotenv";

dotenv.config();
const { TWELVE_KEY } = process.env;


export const getAllForex = async () => {
    const symbols = 'EUR/ILS,USD/ILS'
    const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbols)}&apikey=${TWELVE_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}


export const getDetailForex = async (currency) => {
    const symbol = `${currency}/ILS`;
    const url = `https://api.twelvedata.com/quote?symbol=${(symbol)}&apikey=${TWELVE_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}



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