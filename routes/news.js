const express = require("express")
const router = express.Router()
const {getNews , getSingleNews} = require("../controllers/news")

router.route('/').get(getNews)
router.route('/:id').get(getSingleNews)

module.exports = router