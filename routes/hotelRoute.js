const express = require('express');
const newsController = require('../controller/hotelcontroller.js');
const router = express.Router();


router.get('/hotel', newsController.getHotel);

router.post('/hotel', newsController.addHotel);

router.post('/backfill-hotel', newsController.backfillHotel)

router.get('/hotel/:id', newsController.getHotelById)

module.exports = router;