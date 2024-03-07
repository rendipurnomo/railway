const express = require('express');
const {createBanner, getAllBanners, getBannerById, deleteBanner} = require('../controllers/banner.controller.js');

const router = express.Router();

router.post('/', createBanner);
router.get('/', getAllBanners);
router.get('/:id', getBannerById);
router.delete('/:id', deleteBanner);

module.exports = router