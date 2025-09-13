import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Forex router");
})


export default router;