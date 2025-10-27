const {getHeadlines , getNewsbySource} = require('../api/NewsApi')
const getGuardian = require('../api/Guardian')

const getNews = async (req , res) => {
    try{
        const { country } = req.query
        const { category } = req.body
        console.log(country)
        console.log(category)

        // const NewsApiResource = await getHeadlines(country , data) 
        const NewsApiResource = await getHeadlines(country , category) 
        const GuardianResource = await getGuardian()
        res.status(200).json({NewsApi : NewsApiResource})
        // console.log(req.user)
    }
    catch(error){
        res.status(500).json({ msg : "Something went wrong with the Api resource !!!"})
    }
}

const getSingleNews = async (req , res) => {
    res.send("This is the Single News !!!")
}


const getSearchNews = () => {
    console.log("The News Is searching !!!")
}

module.exports = {
    getNews, 
    getSingleNews,
    getSearchNews
}