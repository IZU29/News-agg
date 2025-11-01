const express = require("express")
const router = express.Router()
const {getNews , getSingleNews , getSearchNews} = require("../controllers/news")

router.route('/').get(getNews)
router.route('/search').get(getSearchNews)
router.route('/:id').get(getSingleNews)

module.exports = router