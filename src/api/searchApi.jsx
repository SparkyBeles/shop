async function searchApi(search) {
    
    const apiKey = import.meta.env.VITE_API_KEY;

  try {
   
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=sv-SE&query=${search}`;
    const searchRes = await fetch(searchUrl);
    
    if (!searchRes.ok) {  
      throw new Error("Search Error: " + searchRes.status);
    }
    
    const data = await searchRes.json();
    const results = data.results ?? [];

  
    const firstResult = results[0];
    
    if (firstResult && firstResult.media_type === "person") {
     
      const personId = firstResult.id;
      
      const movieCreditsUrl = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=sv-SE`;
      const tvCreditsUrl = `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${apiKey}&language=sv-SE`;
      
    
      const [movieRes, seriesRes] = await Promise.all([
        fetch(movieCreditsUrl),
        fetch(tvCreditsUrl)
      ]);
      
      if (!movieRes.ok || !seriesRes.ok) {
        throw new Error("Credits fetch error");
      }
      
      const [movieCredits, tvCredits] = await Promise.all([
        movieRes.json(),
        seriesRes.json()
      ]);
      
      
      const combined = [
        ...(movieCredits.cast ?? []).map(m => ({
          type: "movie",
          id: m.id,
          title: m.title,
          poster: m.poster_path
        })),
        ...(tvCredits.cast ?? []).map(s => ({
          type: "series",
          id: s.id,
          title: s.name,
          poster: s.poster_path
        }))
      ];
      
      return combined;
      
    } else {
      
      const mapped = results
        .filter(item => item.media_type !== "person") 
        .map(item => ({
          type: item.media_type === "movie" ? "movie" : "series",
          id: item.id,
          title: item.title || item.name,
          poster: item.poster_path,
          description: item.overview,
          release_date: item.release_date || item.first_air_date
        }));
      
      return mapped;
    }
    
  } catch (error) {
    console.error("Search API Error:", error);
    return [];
  }
}

export default searchApi;