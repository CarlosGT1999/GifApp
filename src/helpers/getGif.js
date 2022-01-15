const getGifs = async(category) => {

    const urlSearch = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=Uqmr0pvq1IUN4IiR57lUUKUONmrDQmKv`
    const resp = await fetch(urlSearch)
    const {data} = await resp.json()

    const gifs = data.map((img) => {
        return{
            id : img.id,
            title : img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs

}

export default getGifs