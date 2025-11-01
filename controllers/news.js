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
    const { country , category } = req.body
    console.log(q)
    // get NewsApi
    const getCategoryNews = await getHeadlines(country , category)
    // filter search in each category
    const allArticles =  []
    for(const category in getCategoryNews){
        if(getCategoryNews.hasOwnProperty(category)){
            const articles = getCategoryNews[category]
            for(const article of articles){
                allArticles.push({...article , category})
            }
        }
    //  SearchedValue.push({}...getNewsApi[category[i]]])
    }
    const searchterm = q.toLowerCase()
    const lowerterm = searchterm
    // .toLowerCase()
    const results = []
    for(const article of allArticles){
    //    const {title , description} = article
       const title = article.title.toLowerCase()
       const description = article.description
    //    console.log(description)
       if(title.includes(searchterm)||(description?description.includes(searchterm):false)){
        // console.log(article)
        results.push(article)
       }
    }
    
    res.status(200).json(results)
}

module.exports = {
    getNews, 
    getSingleNews,
    getSearchNews
}