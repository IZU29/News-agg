const axios = require('axios')

const getHeadlines = async (country , category) => {
    const Categories = category
// will collect array parameter of Categories
    const params = {
        country ,
        apiKey : 'c2179c00257249fa9b18aa05b5cca068', 
        // category
    }
    
    try{
        let data;
        const categorizedNews = {}

        for(categoryVal of category){
            const { data } = await axios.get('https://newsapi.org/v2/top-headlines/' , { params , categoryVal })
            //  data = response.data.articles.map(article => (
            //     {source : article.source.name, id: article.source.id , author : article.author , title : article.title , description : article.description , url : article.url, urlToImage : article.urlToImage , publishedAt : article.publishedAt }
            // ))

            categorizedNews[categoryVal] = data.articles
        }
        // return data

        return categorizedNews
    }
    catch(error){
        console.log('Something Went Wrong !!!')
    }
}


module.exports = getHeadlines