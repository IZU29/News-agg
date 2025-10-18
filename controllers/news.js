const getNewsApi = require('../api/NewsApi')

const getNews = async (req , res) => {
    const NewsApiResource = await getNewsApi("us") 
    res.status(200).json({NewsApi : NewsApiResource})
}

const getSingleNews = async (req , res) => {
    res.send("This is the Single News !!!")
}

module.exports = {
    getNews, 
    getSingleNews
}