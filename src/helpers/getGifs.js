export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=JpF1xxbPPzJCGuIvJodCW5NAFWEWdwYI&limit=10`
    const res = await fetch(url);
    const { data } = await res.json();


    const gifs = data.map(
        gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        }
    )
    // console.log(data)
    return gifs
}