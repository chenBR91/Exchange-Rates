import {getAllForex, getDetailForex} from '../services/ForexService.js'

export const getAllForexController = ('/', async (req, res) => {
    try {
        const data = await getAllForex();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({'error': err});
    }
})


export const getDetailForexController = ('/', async (req, res) => {
    try {
        const { currency } = req.params; // capture route param
        const data = await getDetailForex(currency)
        res.json(data);
    }
    catch(err) {
        res.status(500).json({'error': err});
    }
})


// export const renderForexController = ('/', async (req, res) => {
//     try {
//         const data = await renderForex('USD');
//         console.log(data);
//     }
//     catch(err) {
//         res.status(500).json({'error': err});
//     }
// })