const getNews = async (req , res) => {
    res.send("This is the News !!!")
}

const getSingleNews = async (req , res) => {
    res.send("This is the Single News !!!")
}

module.exports = {
    getNews, 
    getSingleNews
}