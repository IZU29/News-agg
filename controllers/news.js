const {getHeadlines , getNewsbySource} = require('../api/NewsApi')
const getGuardian = require('../api/Guardian')
const User = require('../models/user')
const getNews = async (req , res) => {
    try{
        // const {  } = req.query
        // The country variable is set as "us"
        const country = "us"
        const {userId , name} = req.user
        console.log(req.user)
        const user = await User.findById(userId)
        const category = user.preferences.Categories
        // const NewsApiResource = await getHeadlines(country , data) 
        const NewsApiResource = await getHeadlines(country , category) 
        const GuardianResource = await getGuardian()
        res.status(200).json({NewsApi : NewsApiResource})
        // console.log(req.user)
    }
    catch(error){
        res.status(500).json({ msg : "Something went wrong with the Api resource !!!" , error : error})
    }
}

const getSingleNews = async (req , res) => {
    console.log(req.params)
    res.send("This is the Single News !!!")
}


const getSearchNews = async (req , res) => {
    try{
    const { q } = req.query
    const { country } = req.body
    console.log(q)
    // get NewsApi
    const getCategoryNews = await getHeadlines(country , category)
    // filter search in each category
    const {userId , name} = req.user
    const user = await User.findById(userId)
    const category = user.preferences.Categories
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
catch(error){
    res.status(500).json({ msg : "Something went wrong with the Api resource !!!" , error : error})
}
}
const saveNews = async (req , res) => {
    try{
    const SavedNews = {...req.body}
    const { userId , name} = req.user
    const user = await User.findByIdAndUpdate(userId , { $push: {savedArticles : SavedNews} } , { new : true , runValidators : true })
    res.status(200).json({status: "Saved" , data : user.savedArticles })
    // SavedNewsArray.push(user.preferences.Save)
    }
    catch(error){
        res.status(500).json({msg : "Somethin is wrong with BookMark" , err : error})
    }
}

const deleteSaveNews = (req , res) => {
    
}

const getSaveNews = (req , res) => {
    
}
module.exports = {
    getNews, 
    getSingleNews,
    getSearchNews,
    saveNews
}