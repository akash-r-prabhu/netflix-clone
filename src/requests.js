const API_KEY = "1e2c807f1eb5a368faefe31295c5d6db";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
   fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
   fetchTV: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
}
export default requests;