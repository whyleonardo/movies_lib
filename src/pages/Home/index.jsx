import { useState, useEffect } from "react"
import { MovieCard } from "../../components/MovieCard"
import api from '../../services/api';

const moviesURL = api.url
const apiKey = api.key


export const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedURL)
  }, [])


  return (
    <div
      className="px-6 text-white">
      <h2
        className="text-3xl text-center font-bold">
        Most Rated Movies
      </h2>
      <div
        className="grid grid-cols-3">

        {topMovies.lenght === 0 && <p>Loading...</p>}
        {topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
