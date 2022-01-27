export const getGifs = async (category) => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=XWBx7AAEkZ1PIJ1REBEMkk7zC9PG8gjH`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    // setimages(gifs);
    return gifs;
}