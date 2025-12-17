const axios = require('axios')


const getGuardian = async () => {
    // const category 
    const params = {
        'api-key' : '6a519aaa-78ac-4e53-8830-851dce16afd3',
        'page-size': '50'
        
     }
   try{
    const response = await axios.get('https://content.guardianapis.com/search' , {params})
    const data = response.data.response.results.map(article => (
        {source : article.type, id: article.pillarId , author : '' , title : article.webTitle , description : '' , url : article.webUrl, urlToImage : '' , publishedAt : article.webPublicationDate , newsSource : "Guardian"}
    ))
    return data
}
catch(error){
    res.status(500).json({msg : 'Something Went Wrong with this API'})
}
}



module.exports = getGuardian