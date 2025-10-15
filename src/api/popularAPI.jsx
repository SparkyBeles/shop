async function popularAPI(searchWord) {
    
    const apiKey = import.meta.env.VITE_API_KEY;

  try {
   
    const popularUrl = `https://api.themoviedb.org/3/movie/${searchWord}?api_key=${apiKey}&language=en-US&page=1`;


    const response = await fetch(popularUrl);
    if (!response.ok) throw new Error(`Error fetching ${searchWord}`);

    const data = await response.json();

    return (data.results ?? []).map(item => ({
        ...item, 
        id: item.id, 
        title: item.title ? item.title : item.name,
        poster: item.poster_path,
    }))

} catch (error) {
    console.error(error)
    return [];

  }
}

export default popularAPI;
