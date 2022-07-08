import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard';
import api from '../../services/api';

const searchURL = api.search
const apiKey = api.key

export const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])

  return (
    <div
      className="px-6 text-white">
      <h2
        className="text-3xl text-center font-bold">
        Search results to: <span className='text-brand-700'>"{query}"</span>
      </h2>
      <div
        className="grid grid-cols-3">

        {!movies && <p>Loading...</p>}
        {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
