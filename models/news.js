const mongoose = require('mongoose')


const NewSchema = new mongoose.Schema({
    source : String ,
    id : String ,
    author : String ,
    title : String ,
    description : String ,
    url : String ,
    urlToImage : String ,
    publisheAt : String ,
}) 

// {source : article.source.name, id: article.source.id , author : article.author , title : article.title , description : article.description , url : article.url, urlToImage : article.urlToImage , publishedAt : article.publishedAt }