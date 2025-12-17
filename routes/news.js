const express = require("express")
const router = express.Router()
const {getNews , getSingleNews , getSearchNews , saveNews , getFormattedNews} = require("../controllers/news")
const NewsFormatter = require('../api/NewsFormatter')

router.route('/').get(getNews)
router.route('/testing').get(getFormattedNews)
router.route('/search').get(getSearchNews)
router.route('/:id').get(getSingleNews)
router.route('/saved').patch(saveNews)

module.exports = router