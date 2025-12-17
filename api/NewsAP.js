const axios = require('axios')

const getNewsAP = async (country , category ,page) => {
// will collect array parameter of Categories
    const params = {
        country ,
        apiKey : 'c2179c00257249fa9b18aa05b5cca068', 
        category,
        page
    }
    try{
        // let data;
        const categorizedNews = {}
        const { data } = await axios.get('https://newsapi.org/v2/top-headlines/' , { params : {...params  , category : categoryVal} })
        
        return data
    }
    catch(error){
        console.log('Something Went Wrong !!!')
    }
}
    
module.exports = {
    getNewsAP
}