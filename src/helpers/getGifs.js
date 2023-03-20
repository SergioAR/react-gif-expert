export const getGifs = async (category) => {

    const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=6irgJ8FIOHq3DvmtknrtJPaXizPYPEnk&q=${category}&limit=20&offset=0&rating=g&lang=es`;

    const response = await fetch(urlGiphy);
    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );
    
    return gifs;
}