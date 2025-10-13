
async function genreAPI(mediaType, genreId) {
    
    const apiKey = import.meta.env.VITE_API_KEY;

  try {
   
    const genreUrl = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&with_genres=${genreId}&language=en-US&page=1`

    const result = await fetch(genreUrl);
    if (!result.ok) throw new Error(`Error fetching ${mediaType} by genre: ${result.status}`);

    const data = await result.json();

    return (data.results ?? []).map(item => ({
        ...item, 
        type: mediaType,
        id: item.id, 
        title: item.title ? item.title : item.name,
        poster: item.poster_path,
    }))

} catch (error) {
    console.error(error)
    return [];

  }
}

export default genreAPI;


