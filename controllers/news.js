const getNewsApi = require('../api/NewsApi')
const getGuardian = require('../api/Guardian')

const getNews = async (req , res) => {
    try{
        const { data } = req.body
        const NewsApiResource = await getNewsApi("us" , data) 
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