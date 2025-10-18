const axios = require('axios')

const getHeadlines = async (country , category) => {
    const params = {
        country ,
        apiKey : 'c2179c00257249fa9b18aa05b5cca068'
    }
    
    try{
        const response = await axios.get('https://newsapi.org/v2/top-headlines/' , { params })
        const data = response.data.articles.map(article => (
            {source : article.source.name, id: article.source.id , author : article.author , title : article.title , description : article.description , url : article.url, urlToImage : article.urlToImage , publishedAt : article.publishedAt}
        ))
        return data
    }
    catch(error){
        console.log('Something Went Wrong !!!')
    }
}


module.exports = getHeadlines