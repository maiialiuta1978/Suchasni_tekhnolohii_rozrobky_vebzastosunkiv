
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const postsController = require('../controllers/postsController');

router.get('/', postsController.getPosts)
router.get('/about',pageController.getAbout);
router.get('/privacy-policy', pageController.getPrivacy);

module.exports = router;
