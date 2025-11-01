const {getHeadlines , getNewsbySource} = require('../api/NewsApi')
const getGuardian = require('../api/Guardian')

const getNews = async (req , res) => {
    try{
        // const {  } = req.query
        const { country , category } = req.body
        console.log(req.user)
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
    console.log(req.params)
    res.send("This is the Single News !!!")
}


const getSearchNews = async (req , res) => {
    const { q } = req.query
    console.log(q)
    res.send("The News Is searching !!!")
}

module.exports = {
    getNews, 
    getSingleNews,
    getSearchNews
}