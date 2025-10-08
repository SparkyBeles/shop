 async function tmdbAPI() {
  
  
  // tmdb api key
  const apiKey = import.meta.env.VITE_API_KEY;

  const movieUrl  = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=sv-SE&page=1`;
  const seriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=sv-SE&page=1`;

  try {
    const [movieRes, seriesRes] = await Promise.all([ fetch(movieUrl), fetch(seriesUrl) ]);

    if (!movieRes.ok)  throw new Error("Movie Error! " + movieRes.status);
    if (!seriesRes.ok) throw new Error("Serie Error! " + seriesRes.status);

    const [movies, series] = await Promise.all([ movieRes.json(), seriesRes.json() ]);

    

    // combined list of movie and shows. if someone wants separate list for movie and shows separate it here.
    const combined = [
      ...(movies.results ?? []).map(m => ({...m,   // If you want something specific from the tmdb api
        type: "movie",
        id: m.id,
        title: m.title,
        poster: m.poster_path
      })),

      ...(series.results ?? []).map(s => ({ ...s,   // If you want something specific from the tmdb api 
        type: "series",
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
