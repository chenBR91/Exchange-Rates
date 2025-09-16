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


export const renderForex = async (currency) => {
    const symbol = `${currency}/ILS`;
    const url = `https://api.twelvedata.com/quote?symbol=${(symbol)}&apikey=${TWELVE_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
