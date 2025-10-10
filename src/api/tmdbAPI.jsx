 async function tmdbAPI() {
  
  
  // tmdb api key
  const apiKey = import.meta.env.VITE_API_KEY;

  const movieUrl  = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-SE&page=1`;
  const seriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-SE&page=1`;

  try {
    const [movieRes, seriesRes] = await Promise.all([ fetch(movieUrl), fetch(seriesUrl) ]);

    if (!movieRes.ok)  throw new Error("Movie Error! " + movieRes.status);
    if (!seriesRes.ok) throw new Error("Serie Error! " + seriesRes.status);

    const [movies, series] = await Promise.all([ movieRes.json(), seriesRes.json() ]);

    

    
    const combined = [
      ...(movies.results ?? []).map(m => ({...m,   
        type: "movie",    // for movie specific query
        id: m.id,
        title: m.title,
        poster: m.poster_path
      })),

      ...(series.results ?? []).map(s => ({ ...s,   
        type: "series",    // for shows specific query
        id: s.id,
        title: s.name,
        poster: s.poster_path
      
      })),
    ];

    return combined;
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
}
export default tmdbAPI;
